import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Employee } from '../../../models/Employee';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  teamMembers: Array<Employee> = [];
  employee: Employee;
  modeEdit: Boolean = false;
  saveEvent = new EventEmitter<boolean>();
  cancelEvent = new EventEmitter<boolean>();

  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.employee = this.userService.getUser();
    this.teamMembers = [];
    this.employee.employeeEmployeeTeamTeamOwner.forEach(member => {
      this.teamMembers.push(member.teamMember);
    });
  }

  ShowHideModeEdit() {
    this.modeEdit = !this.modeEdit;
  }

  saveClick() {
    this.saveEvent.emit(true);
  }

  cancelClick() {
    this.ShowHideModeEdit();
    this.cancelEvent.emit(true);
  }

  saveDone() {
    this.getEmployee();
    if (this.modeEdit) {
      this.ShowHideModeEdit();
    }
  }
}
