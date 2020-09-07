import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Store } from '@ngrx/store';
import { IAppState } from '../../interfaces/state';
import { INotificationState } from '../../interfaces/notification.state';
import { ISettings } from '../../interfaces/settings';
import { toggleMenu } from '../../animations/menuAnimations';
import { navbarState } from '../../animations/navbarAnimation';
import { searchApear } from '../../animations/searchAnimation';
import { BaseLayoutComponent } from '../base-layout/base-layout.component';
import { DataService } from '../../services/data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'vertical-layout',
  templateUrl: './vertical.component.html',
  styleUrls: [
    '../base-layout/base-layout.component.scss',
    './vertical.component.scss'
  ],
  animations: [toggleMenu, navbarState, searchApear]
})
export class VerticalLayoutComponent extends BaseLayoutComponent implements OnInit {
  constructor(
    router: Router,
    fb: FormBuilder,
    store: Store<INotificationState>,
    settingsStore: Store<ISettings>,
    menuStore: Store<IAppState>,
    dataSv: DataService,
    private userService: UserService
  ) {
    super(router, fb, store, settingsStore, menuStore, dataSv);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  openRightMenu($event: any) {
    this.userService.showHideRightMenu($event.target.id, $event.target.id);

  }
}
