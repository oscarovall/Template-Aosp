import { Component, OnInit, ViewChild} from '@angular/core';
import { CalendarService } from '../../../../services/calendar.service';
import { NgForm } from '@angular/forms';
import { Appointment } from '../../../../models/crm/Appointment';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {

  @ViewChild('f', null) form: NgForm;
  addTask: Appointment;
  startTime: Date;
  endTime: Date;
  wasValidated = false;
  leads = [
    {
      id: 1,
      name: 'Oscar'
    },
    {
      id: 1,
      name: 'Leo'
    },
    {
      id: 1,
      name: 'Migue'
    }
  ];

  constructor(
    private calendarService: CalendarService
  ) {
    this.addTask = new Appointment( 0 , '', new Date(), null, '', '', false, false, '', null, null, new Date());
  }

  ngOnInit() {
  }

  setDate(event, start) {
    if (start) {
      this.addTask.startDate = event;
    } else {
      this.addTask.endDate = event;
    }
  }

  saveTask() {
    if (this.startTime && this.addTask.startDate && this.endTime && this.addTask.endDate ) {
      this.addTask.startDate.setHours(this.startTime.getHours(), this.startTime.getMinutes());
      this.addTask.endDate.setHours(this.endTime.getHours(), this.endTime.getMinutes());
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
