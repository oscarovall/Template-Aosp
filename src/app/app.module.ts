import { AppConfig } from './app.config';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { MenuReducer } from './store/reducers/menu.reducer';
import { NotificationReducer } from './store/reducers/notification.reducer';
import { SettingsReducer } from './store/reducers/settings.reducer';

import { AppComponent } from './app.component';

import { ROUTES, RoutingModule } from './routing/routing.module';
import { UIModule } from './ui/ui.module';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot(),
    BrowserAnimationsModule,
    NgbModalModule,
    RouterModule.forRoot(ROUTES, { useHash: false }),
    HttpClientModule,
    StoreModule.forRoot({
      menuState: MenuReducer,
      notifications: NotificationReducer,
      settings: SettingsReducer
    }),
    LayoutModule,
    UIModule,
    PagesModule,
    RoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [DatePipe, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
