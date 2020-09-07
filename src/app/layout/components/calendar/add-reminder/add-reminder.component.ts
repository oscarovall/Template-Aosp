import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarService } from '../../../../services/calendar.service';
import { NgForm } from '@angular/forms';
import { Appointment } from '../../../../models/crm/Appointment';


@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.scss']
})
export class AddReminderComponent implements OnInit {

  @ViewChild('f', null) form: NgForm;
  addTask: Appointment;
  hora: Date;
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
    if (this.hora && this.addTask.startDate ) {
      this.addTask.startDate.setHours(this.hora.getHours(), this.hora.getMinutes());
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
