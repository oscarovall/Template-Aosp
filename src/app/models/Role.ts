import { Employee } from './Employee';
import { RolePermission } from './RolePermission';
import { Step } from './workflow/Step';
export class Role {

  public role1: string;

  employee: Employee[];
  rolePermission: RolePermission[];
  step: Step[];

  constructor() {}
}
