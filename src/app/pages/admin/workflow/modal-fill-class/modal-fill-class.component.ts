import { Component, OnInit, Inject } from '@angular/core';
import { Step } from '../../../../models/workflow/Step';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassesService } from '../../../../services/classes.service';
import Swal from 'sweetalert2';
import { WorkflowService } from '../../../../services/workflow.service';
import { Class } from '../../../../models/Class';
import { UserService } from '../../../../services/user.service';
import { Role } from '../../../../models/Role';
import { StepClasses } from '../../../../models/workflow/StepClasses';

@Component({
  selector: 'app-modal-fill-class',
  templateUrl: './modal-fill-class.component.html',
  styleUrls: ['./modal-fill-class.component.css']
})
export class ModalFillClassComponent implements OnInit {

  newStep: Step;
  action: string;
  roles: Role[];

  constructor(
    public dialogRef: MatDialogRef<ModalFillClassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public classesService: ClassesService,
    private userService: UserService) {
    this.newStep = data.step;
    this.action = data.action;
  }

  ngOnInit() {
    // console.log('Step:', this.newStep);
    this.roles = [];
    this.userService.getRoles().subscribe((roles: Role[]) => {
      this.roles = roles;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveButton() {
    console.log(this.newStep);
    if (this.newStep.name && this.newStep.name !== '' && this.newStep.stepClasses.length > 0) {
      this.dialogRef.close({ action: this.action, step: this.newStep });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Issue on the selected parameters',
        text: 'Some parameters are missing.'
      });
    }
  }

  closeButton() {
    this.dialogRef.close();
  }

  deleteButton() {
    console.log(this.newStep);
    this.dialogRef.close({ action: 'Delete', step: this.newStep });
  }

  templateChanged($event: any, stepClass: StepClasses) {
    const value = $event.target.value;

    this.classesService.classes.forEach((classObj: Class) => {
      if (classObj.classId === Number.parseInt(value, 10)) {
        stepClass.classId = classObj.classId;
      }
    });
  }

  deadlineChange(value: number) {
    this.newStep.deadline = value;
    if (value === 0) {
      this.newStep.deadline = null;
    }
  }

}
