import { Lead } from './lead';


export class Customer {

  public customerId: number;
  public name: string;
  public lastname: string;
  public email: string;
  public mobileNum: string;
  public phoneNumber: string;
  public channelType: string;

  public lead: Lead;

  constructor() {}
}
