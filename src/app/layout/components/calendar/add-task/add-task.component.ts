import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from '../../../../models/crm/Appointment';
import { NgForm } from '@angular/forms';
import { CalendarService } from '../../../../services/calendar.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @ViewChild('f', null) form: NgForm;

  addTask: Appointment;
  startTime: Date;
  wasValidated = false;
  constructor(
    private calendarService: CalendarService
  ) {
    this.addTask = new Appointment( 0 , '', new Date(), null, '', '', false, false, '', null, null, new Date());
   }

  ngOnInit() {
  }

  setDate(event) {
    this.addTask.startDate = event;
  }

  saveTask() {
    if (this.startTime && this.addTask.startDate ) {
      this.addTask.startDate.setHours(this.startTime.getHours(), this.startTime.getMinutes());
      if (this.form.valid === false) {
        this.wasValidated = true;
      } else {
        console.log('data Task:', this.addTask);
        this.wasValidated = false;
        this.calendarService.createAppointment(this.addTask).subscribe( res => {
        });
      }
    } else {
      this.wasValidated = true;
    }
  }

  setPriority(event) {
    this.addTask.priority = event;
  }
}
