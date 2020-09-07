import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Class } from '../models/Class';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  hostServer = 'https://localhost:5001';
  public classes: Class[];
  public updateClasses: EventEmitter<Class[]> = new EventEmitter();

  constructor(private http: HttpClient) {
    if (!this.classes) {
      this.getClassesServer().subscribe((classes: Class[]) => {
        this.classes = classes;
        this.updateClasses.emit(this.classes);
        console.log('Classes:', this.classes);
      });
    }
  }


  ////////////////////////////////////////////
  //   CLASSES
  ////////////////////////////////////////////
  getClassesServer() {
    return this.http.get<Class[]>(`${this.hostServer}/api/Classes`)
      .pipe(
        // map( (workflows: Workflow[]) => {
        //   workflows.forEach(workflow => {
        //     this.getGroupStepOverviewsForWorkflow(workflow.workflowId)
        //     .subscribe((groups: GroupStepOverview[]) => workflow.groupStepOverview = groups);
        //   });
        //   console.log('Workflows', workflows);
        //   return workflows;
        // }),
        catchError(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error when getting Workflows',
            text: err.message
          });
          return [];
        })
      );
  }

}
