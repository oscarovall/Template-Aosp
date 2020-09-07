import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LeadsService } from '../../../services/leads.service';

import { Attribute } from '../../../models/Attribute';
import { Class } from '../../../models/Class';
import { AttributeType } from '../../../models/AttributeType';
import { CustomerAttributeValue } from '../../../models/CustomerAttributeValue';

import { ActivatedRoute } from '@angular/router';
import { Lead } from '../../../models/crm/Lead';
import { WorkflowService } from '../../../services/workflow.service';
import { GroupStepOverview } from '../../../models/workflow/GroupStepOverview';
import { LeadStep } from '../../../models/crm/LeadStep';
import { LeadAttributeValue } from '../../../models/crm/LeadAttributeValue';
import { AppConfig } from '../../../app.config';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styles: []
})
export class LeadComponent implements OnInit {
  selectData = [];
  classes: Class[];
  edit: boolean = false;
  customerAttValueChange: CustomerAttributeValue[];
  leadAttValueChange: LeadAttributeValue[];
  leadId: number;
  lead: Lead;
  WorkflowId: number = this.appConfig.salesWorkflowId; //  GET THE REAL WORKFLOW ID
  wizardGroups: GroupStepOverview[] = [];
  @ViewChild('f', null)
  form: NgForm;

  constructor(
    public ar: ActivatedRoute,
    private leadsService: LeadsService,
    private wService: WorkflowService,
    public appConfig: AppConfig,
    private _snackBar: MatSnackBar
  ) {
    // Get the Id of the Lead
    this.ar.params.subscribe((params) => {
      this.leadId = params.id;
      this.leadsService.getLead(this.leadId).subscribe((lead: Lead) => {

        this.lead = lead;
        // Get list of Groups
        this.wService
          .getGroupStepOverviewsForWorkflow(lead.workflowId)
          .subscribe((wGroups: GroupStepOverview[]) => {
            // Checking the status of the groups
            this.lead.leadSteps.forEach((leadStep: LeadStep) => {
              wGroups.forEach((group: GroupStepOverview) => {
                if (group.groupId === leadStep.step.groupId) {
                  if (group.statusLead !== 'Done') {
                    group.statusLead = leadStep.statusName;
                  }
                }
              });
            });
            console.log('wGroups:', wGroups);
            this.wizardGroups = wGroups;
          });

        // Get General Classes
        const ClassCustomerLead = this.leadsService.getClassCustomerLead().subscribe((classes: Class[]) => {
          console.log('Classes', classes);
          this.classes = classes;
          // Minimize and Hide classes
          console.log(this.lead.leadSteps);
          this.lead.leadSteps.forEach((leadStep: LeadStep) => {
            leadStep.step.stepClasses.forEach(stepClass => {
              this.classes.forEach((classObj: Class) => {
                // Show Done Classes
                if (stepClass.classId === classObj.classId) {
                  classObj.visible = true;
                  // Visible Classes - OPEN THE CURRENT CLASS
                  if (leadStep.statusName === this.appConfig.leadStepStatus.current) {
                    classObj.open = true;
                  }
                }
              });
            });
          });

          // Get Lead Values
          this.lead.leadAttributeValue.forEach((leadAttValue: LeadAttributeValue) => {
            this.classes.forEach((classObj: Class) => {
              classObj.attributeType.forEach((attType: AttributeType) => {
                if (attType.attributeTypeId === leadAttValue.attributeTypeId) {
                  if (attType.leadAttributeValue === null) {
                    attType.leadAttributeValue = [];
                  }
                  attType.leadAttributeValue.push(leadAttValue);
                  attType.attribute.forEach((att: Attribute) => {
                    if (leadAttValue.attributeId === att.attributeId) {
                      att.checkValue = true;
                    }
                  });
                }
              });
            });
          });

          console.log(this.classes);
        });
      });
    });
  }

  ngOnInit() {
    if (this.leadId) {
    }
  }
  Test(some: any) {
    console.log('paso', some);
  }

  // Hidden Show Classes with dependencies
  validateClass(AttributeObj, classes: Class[]) {
    if (AttributeObj) {
      if (classes[AttributeObj.attributeType.classId - 1].objectTypeId === this.appConfig.objectType.Customer) {
        let at;
        classes.forEach((classObj) => {
          classObj.attributeType.forEach((attType) => {
            if (AttributeObj.attributeType.attributeTypeId === attType.attributeTypeId) {
              at = attType;
            }
          });
        });
        const attributeId = at.CustomerAttributeValue[0].attributeId;
        if (AttributeObj.attributeId === attributeId) {
          return true;
        }
      } else if (
        classes[AttributeObj.attributeType.classId - 1].objectTypeId === this.appConfig.objectType.Lead
      ) {
        let at;
        classes.forEach((classObj) => {
          classObj.attributeType.forEach((attType) => {
            if (AttributeObj.attributeType.attributeTypeId === attType.attributeTypeId) {
              at = attType;
            }
          });
        });
        const attributeId = at.leadAttributeValue[0].attributeId;
        if (AttributeObj.attributeId === attributeId) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return true;
    }
  }

  // Hidden Show attributeType with dependencies
  validate(attributeNavigation: any, classObj: Class) {
    if (classObj.objectTypeId === this.appConfig.objectType.Customer) {
      if (attributeNavigation) {
        let at;
        classObj.attributeType.forEach((attType) => {
          if (attributeNavigation.attributeType.attributeTypeId === attType.attributeTypeId) {
            at = attType;
          }
        });
        if (attributeNavigation.attributeId === at.customerAttributeValue[0].attributeId) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else if (classObj.objectTypeId === this.appConfig.objectType.Lead) {
      if (attributeNavigation) {
        let at;
        classObj.attributeType.forEach((attType) => {
          if (attributeNavigation.attributeType.attributeTypeId === attType.attributeTypeId) {
            at = attType;
          }
        });
        if (attributeNavigation.attributeId === at.leadAttributeValue[0].attributeId) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  }
  save(classObj: Class) {
    console.log('Form', this.form);

    let allGood = true;
    classObj.attributeType.forEach((attType: AttributeType) => {
      if (attType.obligatory) {
        if (classObj.objectTypeId === this.appConfig.objectType.Lead) {
          if (!attType.leadAttributeValue || attType.leadAttributeValue.length === 0) {
            allGood = false;
            attType.valid = false;
            console.log('ATT Invalid 1', attType);
          } else {
            attType.leadAttributeValue.forEach((lav: LeadAttributeValue) => {
              if (
                (lav.leadAttributeValue1 === '' && !lav.attributeId) ||
                (lav.leadAttributeValue1 === '' && lav.attributeId === -1)
              ) {
                allGood = false;
                attType.valid = false;
                console.log('ATT Invalid 2', attType);
              } else {
                console.log('ATT Valid', attType);
              }
            });
          }
        }
      }
    });

    classObj.attributeType.forEach((attType: AttributeType) => {
      if (attType.valid) {
        if (classObj.objectTypeId === this.appConfig.objectType.Lead) {
          this.lead.leadAttributeValue = attType.leadAttributeValue;
        } else if (classObj.objectTypeId === this.appConfig.objectType.Customer) {
          // To Do
          console.log('To do');
        }
      }
    });

    if (allGood) {
      console.log('SAVING');
    } else {
      console.log('NOT SAVING');
      classObj.wasValidated = !classObj.wasValidated;
    }
    // Saving DATA
    console.log('Savinfg data', this.lead);
    this.leadsService
      .updateLeadAttValues(this.leadId, classObj)
      .subscribe(() => this.sendNotification('Step saved'));
  }

  onChange(value: any, attType: AttributeType, classObj: Class, Att?: any) {
    console.log('Value', value, 'AttType', attType);

    if (value || this.appConfig.dataType.Checkbox.includes(attType.dataTypeId)) {
      const attTypeTemp = attType;

      if (this.appConfig.dataType.NoList.includes(attTypeTemp.dataTypeId)) {
        if (classObj.objectTypeId === this.appConfig.objectType.Customer) {
          if (attType.dataTypeId === this.appConfig.dataType.Date) {
            try {
              const date = new Date(value);
              value = date.toLocaleString('en-US');
            } catch (Exception) {
              value = '';
            }
          }
          attType.customerAttributeValue[0].customerAttributeValue1 = value;
        } else if (classObj.objectTypeId === this.appConfig.objectType.Lead) {
          if (attType.dataTypeId === this.appConfig.dataType.Date) {
            try {
              const date = new Date(value);
              value = date.toLocaleString('en-US');
            } catch (Exception) {
              value = '';
            }
          }
          if (!attType.leadAttributeValue.length) {
            attType.leadAttributeValue = [];
            const data = new LeadAttributeValue();
            data.attributeId = parseInt(value.AttributeID, 10);
            data.leadAttributeValue1 = value;
            data.workflowId = this.WorkflowId;
            data.leadId = this.leadId;
            data.attributeId = -1;
            data.attributeTypeId = attType.attributeTypeId;
            attType.leadAttributeValue.push(data);
          } else {
            attType.leadAttributeValue[0].leadAttributeValue1 = value;
          }
        }
      }

      if (this.appConfig.dataType.List.includes(attTypeTemp.dataTypeId)) {
        if (classObj.objectTypeId === this.appConfig.objectType.Customer) {
          attType.customerAttributeValue[0].attributeId = parseInt(value, 10);
        } else if (classObj.objectTypeId === this.appConfig.objectType.Lead) {
          if (!attType.leadAttributeValue.length) {
            attType.leadAttributeValue = [];
            const data = new LeadAttributeValue();
            data.attributeId = parseInt(value.AttributeID, 10);
            data.workflowId = this.WorkflowId;
            data.leadId = this.leadId;
            data.attributeId = parseInt(value, 10);
            data.attributeTypeId = attType.attributeTypeId;
            attType.leadAttributeValue.push(data);
          } else {
            attType.leadAttributeValue[0].attributeId = parseInt(value, 10);
          }
        }
      }

      if (this.appConfig.dataType.Checkbox.includes(attTypeTemp.dataTypeId)) {
        if (classObj.objectTypeId === this.appConfig.objectType.Customer) {
          if (value) {
            let data = new CustomerAttributeValue();
            data = Att;
            data.customerAttributeValue1 = value;
            attType.customerAttributeValue.push(data);
          } else {
            attType.customerAttributeValue.forEach(function (item, index, object) {
              if (item.attributeId === Att.attributeId) {
                object.splice(index, 1);
              }
            });
          }
        } else if (classObj.objectTypeId === this.appConfig.objectType.Lead) {
          if (value) {
            let data = new LeadAttributeValue();
            data = Att;
            data.workflowId = this.WorkflowId;
            data.leadId = this.leadId;
            data.leadAttributeValue1 = value;
            attType.leadAttributeValue.push(data);
          } else {
            attType.leadAttributeValue.forEach(function (item, index, object) {
              if (item.attributeId === Att.attributeId) {
                object.splice(index, 1);
              }
            });
          }
        }
      }

      if (this.appConfig.dataType.DocumentList.includes(attTypeTemp.dataTypeId)) {
        if (classObj.objectTypeId === this.appConfig.objectType.Customer) {
          if (value) {
            const data = new CustomerAttributeValue();
            data.attributeId = parseInt(value.AttributeID, 10);
            data.customerAttributeValue1 = value.AttributeValue;
            attType.customerAttributeValue.push(data);
          }
        } else if (classObj.objectTypeId === this.appConfig.objectType.Lead) {
          if (value) {
            const data = new LeadAttributeValue();
            data.attributeId = parseInt(value.AttributeID, 10);
            data.leadAttributeValue1 = value.AttributeValue;
            data.workflowId = this.WorkflowId;
            data.leadId = this.leadId;
            data.attributeTypeId = attType.attributeTypeId;
            attType.leadAttributeValue.push(data);
          }
        }
      }

      console.log('attType', attType);

      if (classObj.changedAttTypes) {
        let wasChanged = false;
        classObj.changedAttTypes.forEach((attTypeChange: AttributeType) => {
          if (attTypeChange.attributeTypeId === attType.attributeTypeId) {
            attTypeChange = attType;
            wasChanged = true;
          }
        });

        if (!wasChanged) {
          classObj.changedAttTypes.push(attType);
        }
      } else {
        classObj.changedAttTypes = [];
        classObj.changedAttTypes.push(attType);
      }
    }
  }

  cancelarPropagacion(e) {
    if (e.target.tagName === 'INPUT') {
      e.preventDefault();
      e.returnValue = false;
      e.cancelBubble = true;
      return false;
    }
  }

  sendNotification(message: string) {
    this._snackBar.open(message);
  }
}
