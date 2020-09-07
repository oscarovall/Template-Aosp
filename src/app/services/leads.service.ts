import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';
import { AppConfig } from '../app.config';
import { Class } from '../models/Class';
import { LeadStep } from '../models/crm/LeadStep';
import { Lead } from '../models/crm/lead';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  ClassCustomerlead: any[] = [];

  constructor(private http: HttpClient,
    private router: Router,
    private config: AppConfig) { }

  ////////////////////////////////////////////
  //   LEADS
  ////////////////////////////////////////////
  getLeadSteps() {
    return this.http
      .get<LeadStep[]>(this.config.api + 'LeadSteps') // Must be create interface for ClassCustomer
      .pipe(
        catchError((err: any) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Error when getting Leads',
            text: err.message
          });
          return [];
        })
      );
  }

  getLead(leadId: number) {
    return this.http
      .get<Lead>(this.config.api + `Leads/${leadId}`) // Must be create interface for ClassCustomer
      .pipe(
        map((lead: Lead) => {
          if (lead._1stVisitDate) {
            lead._1stVisitDate = new Date(lead._1stVisitDate);
          }
          if (lead.closeDate) {
            lead.closeDate = new Date(lead.closeDate);
          }
          if (lead.signingDate) {
            lead.signingDate = new Date(lead.signingDate);
          }
          if (lead.lastContactDate) {
            lead.lastContactDate = new Date(lead.lastContactDate);
          }
          if (lead.creationDate) {
            lead.creationDate = new Date(lead.creationDate);
          }

          console.log('Service Lead', lead);
          return lead;
        }),
        catchError((err: any) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Error when getting a Lead',
            text: err.message
          });
          return [];
        })
      );
  }

  getClassCustomerLead() {
    return this.http
      .get<Class[]>(this.config.api + 'Classes/ClassCustomerLead') // Must be create interface for ClassCustomer
      .pipe(
        catchError((err: any) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Error when getting Workflows',
            text: err.message
          });
          return [];
        })
      );
  }

  updateLeadAttValues(leadId: number, classObj: Class) {
    const url = `${this.config.api}Leads/attType/${leadId}/${classObj.objectTypeId}`;

    console.log('Update AttTypes:', classObj.attributeType);
    return this.http.put(url, classObj.attributeType)
      .pipe(catchError((err: any) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Error when updating a Lead',
          text: err.message
        });
        return [];
      })
      );
  }

}
