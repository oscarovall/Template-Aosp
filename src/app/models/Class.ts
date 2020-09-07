import { AttributeType } from './AttributeType';
import { ObjectType } from './ObjectType';

export class Class {
  public classId: number;
  public name: string;
  public description: string;
  public disabled: boolean;
  public objectTypeId: number;
  public side: boolean;

  objectType: ObjectType;

  attributeType: AttributeType[];
  public attribute: any;            // CHANGE

  // UI
  public open: boolean = false;
  public visible: boolean = false;
  public wasValidated = false;

  public changedAttTypes: AttributeType[];

  constructor() {}
}

