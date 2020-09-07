import { Injectable, EventEmitter } from '@angular/core';
import { Template } from '../models/Template';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  hostServer = 'https://localhost:5001';

  public templates: Template[];
  public updateTemplates: EventEmitter<Template[]> = new EventEmitter();

  constructor(private http: HttpClient) {
    if (!this.templates) {
      this.getTemplatesServer().subscribe((templates: Template[]) => {
        this.templates = templates;
        this.updateTemplates.emit(this.templates);
        console.log('Classes:', this.templates);
      });
    }
  }


  ////////////////////////////////////////////
  //   Templates
  ////////////////////////////////////////////
  getTemplatesServer() {
    return this.http.get<Template[]>(`${this.hostServer}/api/Templates`)
      .pipe(
        catchError(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error when getting Templates',
            text: err.message
          });
          return [];
        })
      );
  }
}
