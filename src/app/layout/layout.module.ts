import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UIModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

import { BaseLayoutComponent } from './base-layout';
import { NavBarComponent } from './components/nav-bar';
import { SideBarComponent } from './components/side-bar';
import { VerticalLayoutComponent } from './vertical';
import { ExtraLayoutComponent } from './extra';
import { HorizontalLayoutComponent } from './horizontal';
import { MenuComponent } from './components/menu';
import { FooterComponent } from './components/footer';
import { LogoComponent } from './components/logo/logo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AddTaskComponent } from './components/calendar/add-task/add-task.component';
import { AddAppointmentComponent } from './components/calendar/add-appointment/add-appointment.component';
import { AddReminderComponent } from './components/calendar/add-reminder/add-reminder.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UIModule,
    FormsModule,
    ReactiveFormsModule,
    MalihuScrollbarModule.forRoot(),
    BsDatepickerModule,
    MatTabsModule,
    TimepickerModule
  ],
  declarations: [
    NavBarComponent,
    SideBarComponent,
    MenuComponent,
    VerticalLayoutComponent,
    ExtraLayoutComponent,
    HorizontalLayoutComponent,
    MenuComponent,
    FooterComponent,
    BaseLayoutComponent,
    LogoComponent,
    ProfileComponent,
    RightMenuComponent,
    CalendarComponent,
    AddTaskComponent,
    AddAppointmentComponent,
    AddReminderComponent,
  ]
})
export class LayoutModule { }
