import { DocUploadComponent } from './../file-uploader/doc-upload/doc-upload.component';
import { Component, OnInit, HostBinding, Input, OnChanges, EventEmitter, Output, ViewChild } from '@angular/core';
import { Employee } from '../../../models/Employee';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'tc-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class TCContactComponent implements OnInit {
  @HostBinding('class.tc-contact') true;

  @Input() employeeData: Employee;
  @Input() modeEdit: Boolean;
  @Input() saveEvent: EventEmitter<boolean>;
  @Input() cancelEvent: EventEmitter<boolean>;
  @Output() saveDone: EventEmitter<boolean>;
  @ViewChild('f', null) form: NgForm;

  contact: Employee;
  wasValidated = false;
  constructor(private userService: UserService, public docsDialog: MatDialog) {
    this.saveDone = new EventEmitter<boolean>();

  }
  ngOnInit() {
    this.contact = Object.assign({}, this.employeeData);
    this.saveEvent.subscribe(ev => {
      this.saveChanges();
    });
    this.cancelEvent.subscribe(ev => {
      this.cancelChanges();
    });
  }

  saveChanges() {
    if (this.contact.cellphone) {
      if (this.form.valid === false) {
        this.wasValidated = true;
      } else {
        this.wasValidated = false;
        this.userService.updateEmployee(this.contact).subscribe();
        this.updateLocalStorage();
      }
    } else {
      this.wasValidated = true;
    }

  }

  cancelChanges() {
    this.contact = Object.assign({}, this.employeeData);
  }

  changePhoneNumber(event) {
    if (event) {
      this.contact.cellphone = event;
    } else {
      this.contact.cellphone = null;
      this.wasValidated = true;
    }
  }

  uploadDocument(): void {
    const name = this.contact.employeeId;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '368px';
    dialogConfig.data = {
      document: false,
      documentName: name,
    };
    dialogConfig.scrollStrategy = new NoopScrollStrategy();

    const docRef = this.docsDialog.open(DocUploadComponent, dialogConfig);
    docRef.afterClosed().subscribe(result => {
      if (result && result.ok) {
        const extention = result.fileName.split('.').pop();
        const URL = `https://aosp-userdata-test-virginia.s3.amazonaws.com/userfolder/${name}.${extention}`;
        this.contact.imageUrl = URL;
        this.userService.updateEmployee(this.contact).subscribe( res => {
          this.updateLocalStorage();
        });
      }
    });
  }

  updateLocalStorage() {
    this.userService.getEmployeeById(this.contact.employeeId).subscribe((employee: Employee) => {
      this.userService.setUser(JSON.stringify(employee));
      this.saveDone.emit(true);
    });
  }
}
