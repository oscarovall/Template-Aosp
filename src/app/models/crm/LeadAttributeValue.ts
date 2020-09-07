
import { AttributeType } from '../AttributeType';
import { Lead } from './Lead';
import { Attribute } from '../Attribute';

export class LeadAttributeValue {

  public leadId: number;
  public workflowId: number;
  public attributeTypeId: number;
  public attributeId?: number;
  public leadAttributeValue1: string;

  public attribute: Attribute;
  public attributeType: AttributeType;
  public lead: Lead;

  constructor() {}
}
