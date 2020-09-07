import { Attribute } from './Attribute';
import { CustomerAttributeValue } from './CustomerAttributeValue';
import { LeadAttributeValue } from './crm/LeadAttributeValue';


export class AttributeType {

  public attributeTypeId: number;
  public name: string;
  public description: string;
  public dataTypeId: number;
  public attributeTypeParentId: number;
  public classId: number;
  public length: number;
  public position: number;
  public disabled: boolean;
  public obligatory: boolean;
  public required: boolean;
  public attribute: Attribute[];
  public attributeNavigation: any;                              //Create model
  public customerAttributeValue: CustomerAttributeValue[];
  public leadAttributeValue: LeadAttributeValue[] = [];

  // UI
  public valid: boolean = true;

  constructor() {}
}
