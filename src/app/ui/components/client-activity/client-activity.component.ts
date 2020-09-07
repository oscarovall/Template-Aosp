import { Component, OnInit } from '@angular/core';
import { Action } from '../../../store/reducers/notification.reducer';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Notifications {
  date: string;
  hour: string;
  activity: {
    action: string;
    description?: string;
  };
  employee: {
    role: string;
    name?: string;
  };
  action?: any[];
}

@Component({
  selector: 'client-activity',
  templateUrl: './client-activity.component.html',
  styleUrls: ['./client-activity.component.css']
})
export class ClientActivityComponent implements OnInit {
  notifications: Notifications[] = [
    {
      date: '02/13',
      hour: '4:00pm',
      activity: {
        action: 'Outgoing Call',
        description: 'Client Conected Via Phone Call'
      },
      employee: {
        role: 'Sales Rep',
        name: 'Andrew Salas'
      }
    },
    {
      date: '02/13',
      hour: '4:00pm',
      activity: {
        action: 'Outgoing Call',
        description: 'Client Conected Via Phone Call'
      },
      employee: {
        role: 'Processsing Agent',
        name: 'John Doe'
      },
      action: [{ name: 'Action1' }, { name: 'Action2' }, { name: 'Action3' }]
    },
    {
      date: '02/13',
      hour: '4:00pm',
      activity: {
        action: 'Statu Change',
        description: 'Potential Customer to Qualified Lead'
      },
      employee: {
        role: 'System'
      }
    },
    {
      date: '02/13',
      hour: '4:00pm',
      activity: {
        action: 'Reject Document',
        description: 'Sisgnature Illegible'
      },
      employee: {
        role: 'Processing Agent',
        name: 'John Doe'
      },
      action: [{ name: 'Action1' }, { name: 'Action2' }, { name: 'Action3' }]
    }
  ];
  allNotifications;
  constructor() { }

  ngOnInit() {
    this.notifications.forEach((notification) => {
      if (notification.action) {
        notification.action.forEach((action) => {
          action.label = action.name;
          action.value = action.name;
        });
      }
    });
    this.allNotifications = of(this.notifications);
  }

  executeAction(event) {
    console.log('Action', event);
  }

}
