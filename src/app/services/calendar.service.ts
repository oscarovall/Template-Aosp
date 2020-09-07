import { AppConfig } from './../app.config';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/crm/Appointment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(
    private http: HttpClient,
    private config: AppConfig
  ) { }

  getAppointmentEmployees(employeeId) {
    const url = `${this.config.api}AppointmentEmployees/${employeeId}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error when getting Roles',
            text: err.message
          });
          return [];
        })
      );
  }

  updateAppointment(appointment: Appointment) {
    const url = `${this.config.api}Appointment/${appointment.appointmentId}`;
    return this.http.put<Appointment>(url, appointment)
      .pipe(
        catchError(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error when getting Roles',
            text: err.message
          });
          return [];
        })
      );
  }

  createAppointment(appointment: Appointment) {
    const url = `${this.config.api}Appointments`;
    return this.http.post<Appointment>(url, appointment)
      .pipe(
        catchError(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error when getting Roles',
            text: err.message
          });
          return [];
        })
      );
  }


}
