import { Employee } from './../models/Employee';
import { AppConfig } from './../app.config';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/Role';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public buttonIdPermission: string;
  public openRightMenu = false;
  public contentRightMenu: string;
  public openRightMenuChange = new EventEmitter<string>();

  constructor(
    private http: HttpClient,
    private config: AppConfig
  ) {
    this.getEmployeeById(3).subscribe((employee: Employee) => {
      this.setUser(JSON.stringify(employee));
    });
  }

  showHideRightMenu(contentType: string, buttonId: string) {
    console.log('Opening');

    this.buttonIdPermission = buttonId;
    this.contentRightMenu = contentType;
    this.openRightMenu = !this.openRightMenu;
    this.openRightMenuChange.emit(this.buttonIdPermission);
  }

  ////////////////////////////////////////////
  //   ROLES
  ////////////////////////////////////////////
  getRoles() {
    return this.http.get<Role[]>(this.config.api + 'Roles')
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

  getEmployeeById(employeeId) {
    return this.http.get<Employee>(this.config.api + 'Employees/' + employeeId)
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

  updateEmployee(employee) {
    return this.http.put<Employee>(this.config.api + 'Employees/' + employee.employeeId, employee)
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

  setUser(employee) {
    localStorage.setItem('employee', employee);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('employee'));
  }
}
