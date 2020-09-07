import { Employee } from './../../../models/Employee';
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../../models/crm/Appointment';
import { CalendarService } from '../../../services/calendar.service';
import { UserService } from '../../../services/user.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{

  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  today: Date = new Date();
  display = true;
  employeeId: number;

  // objects
  pendingTasks: Appointment[];
  dueTask: Appointment[];

  constructor(
    private calendarService: CalendarService,
    private userService: UserService
  ) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    this.employeeId = this.getEmployeeId();
  }

  ngOnInit() {
    this.getAppointments();
  }

  changeDisplay() {
    this.display = !this.display;
  }

  getEmployeeId() {
    const employee: Employee = this.userService.getUser();
    return employee.employeeId;
  }

  getAppointments() {
    this.calendarService.getAppointmentEmployees(this.employeeId).subscribe( dataList => {
      console.log('dataList', dataList)
      this.pendingTasks = [];
      dataList.forEach(data => {
          if (data.appointment.appointmentTypeId === 'Pending task') {
            this.pendingTasks.push(data.appointment);
            console.log('pendientes->', this.pendingTasks);
          }
      });
    });
  }

}

