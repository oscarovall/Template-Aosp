import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
  api: String = 'https://localhost:5001/api/';

  leadStepStatus = {
    current: 'Current'
  };

  stepType = {
    condition: 0,
    connector: 10
  };

  objectType = {
    Vendor: 1,
    Product: 2,
    Customer: 3,
    Lead: 4,
  };

  salesWorkflowId: 1;

  dataType = {
    NoList: [1, 2, 3, 5, 7, 8, 10, 12, 13, 14, 15, 16],
    List: [4],
    DocumentList: [6, 11],
    Checkbox: [9],

    Text: 1,
    TextLong: 2,
    Date: 3,
    ListValue: 4,
    Time: 5,
    ListImages: 6,
    Radio: 7,
    Money: 8,
    Multiple: 9,
    ExternalLink: 10,
    ListDocument: 11,
    Number: 12,
    LienalGauge: 13,
    PhoneNumber: 14,
    Progress: 15,
    MoneyRange: 16
  };
}
