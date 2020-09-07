import { Store } from './Store';
import { EmployeeEmployeeTeam } from './EmployeeEmployeeTeam';
export class Employee {

  public employeeId: number;
  public email: string;
  public role: string;
  public imageUrl: string;
  public name: string;
  public lastLogin: Date;
  public cellphone: string;
  public storeId: string;
  public store: Store;
  public employeeEmployeeTeamTeamOwner: EmployeeEmployeeTeam[];
  public employeeEmployeeTeamTeamMember: EmployeeEmployeeTeam[];

  constructor() {}
}
