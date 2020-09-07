import { Employee } from '../Employee';
import { Appointment } from './Appointment';
import { LeadAttributeValue } from './LeadAttributeValue';
import { Workflow } from '../workflow/Workflow';
import { LeadStep } from './LeadStep';
import { Customer } from './Customer';


export class Lead {

  public leadId: number;
  public workflowId: number;
  public mainCustomerId: number;
  public sourceName: string;
  public creationDate: Date;
  public employeeId: number;
  public status: string;
  public closeDate?: Date;
  public _1stVisitDate?: Date;
  public signingDate?: Date;
  public lastContactDate?: Date;

  public mainCustomer: Customer;
  public employee: Employee;
  public workflow: Workflow;
  public appointment: Appointment[];
  public leadAttributeValue: LeadAttributeValue[];
  public leadSteps: LeadStep[];

  constructor() {

  }
}
