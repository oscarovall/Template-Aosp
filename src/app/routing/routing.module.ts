import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalLayoutComponent } from '../layout/vertical';
import { ExtraLayoutComponent } from '../layout/extra';
import { PageCardsComponent } from '../pages/ui/cards';
import { PageButtonsComponent } from '../pages/ui/buttons';
import { PageTabsComponent } from '../pages/ui/tabs';
import { PageAccordionsComponent } from '../pages/ui/accordions';
import { PageSimpleTablesComponent } from '../pages/tables/simple-tables';
import { PageProgressComponent } from '../pages/ui/progresses';
import { PageListComponent } from '../pages/ui/lists';
import { PageFilterTableComponent } from '../pages/tables/filter-table';
import { PageSortingTableComponent } from '../pages/tables/sorting-table';
import { PageSearchTableComponent } from '../pages/tables/search-table';
import { PageFormElementsComponent } from '../pages/forms/form-elements';
import { PagePaginationTableComponent } from '../pages/tables/pagination-table';
import { PageToDoComponent } from '../pages/apps/to-do';
import { PageInboxComponent } from '../pages/apps/inbox';
import { PageCalendarComponent } from '../pages/apps/calendar';
import { PageInputsComponent } from '../pages/ui/inputs';
import { PageTextareasComponent } from '../pages/ui/textareas';
import { PageCheckboxesComponent } from '../pages/ui/checkboxes';
import { PageRadioButtonsComponent } from '../pages/ui/radio-buttons';
import { PageUsersComponent } from '../pages/apps/users';
import { PageContactsComponent } from '../pages/apps/contacts';
import { PageTaskboardComponent } from '../pages/apps/taskboard';
import { PageSwitchersComponent } from '../pages/ui/switchers';
import { PageAutocompletesComponent } from '../pages/ui/autocompletes';
import { PageChatComponent } from '../pages/apps/chat';
import { PageGoogleMapsComponent } from '../pages/maps/google-maps';
import { PageLeafletMapsComponent } from '../pages/maps/leaflet-maps';
import { PagePricingComponent } from '../pages/pages/pricing';
import { PageInvoiceComponent } from '../pages/pages/invoice';
import { PageNg2ChartsComponent } from '../pages/charts/ng2-charts';
import { PageNgxChartsComponent } from '../pages/charts/ngx-charts';
import { PageFaqComponent } from '../pages/pages/faq';
import { PageBadgesComponent } from '../pages/ui/badges';
import { PageChartWidgetsComponent } from '../pages/widgets/chart-widgets';
import { PageMediaWidgetsComponent } from '../pages/widgets/media-widgets';
import { PageDataWidgetsComponent } from '../pages/widgets/data-widgets';
import { PageLoginComponent } from '../pages/extra/login';
import { PageSignUpComponent } from '../pages/extra/sign-up';
import { PageNotFoundComponent } from '../pages/extra/not-found';
import { PageInternalErrorComponent } from '../pages/extra/internal-error';
import { PageTypographyComponent } from '../pages/typography';
import { PageTimelineComponent } from '../pages/pages/timeline';
import { PageVTimelineComponent } from '../pages/ui/v-timeline';
import { PageSelectsComponent } from '../pages/ui/selects';
import { PageFormLayoutsComponent } from '../pages/forms/form-layouts';
import { PageFormValidationComponent } from '../pages/forms/form-validation';
import { PageIconsComponent } from '../pages/icons';
import { PageDefaultComponent } from '../pages/dashboards/default';
import { PageAnalyticalComponent } from '../pages/dashboards/analytical';
import { PageFinancialComponent } from '../pages/dashboards/financial';
import { PageSlidersComponent } from '../pages/ui/sliders';
import { PageNotificationsComponent } from '../pages/ui/notifications';
import { HorizontalLayoutComponent } from '../layout/horizontal';
import { PageAlertsComponent } from '../pages/ui/alerts';
import { PageRatingsComponent } from '../pages/ui/ratings';
import { PageDropdownsComponent } from '../pages/ui/dropdowns';
import { PageTravelComponent } from '../pages/dashboards/travel';
import { PageFormWizardComponent } from '../pages/forms/form-wizard';
import { WorkflowComponent } from '../pages/admin/workflow/workflow.component';
import { LeadComponent } from '../pages/crm/lead/lead.component';

const DEFAULT_ROUTES: Routes = [
  { path: '', component: PageDefaultComponent },
  { path: 'workflows-admin', component: WorkflowComponent },
  { path: 'lead/:id', component: LeadComponent },

  // Template Examples
  { path: 'default-dashboard', component: PageDefaultComponent },
  { path: 'analytical-dashboard', component: PageAnalyticalComponent },
  { path: 'financial-dashboard', component: PageFinancialComponent },
  { path: 'users', component: PageUsersComponent },
  { path: 'filter-table', component: PageFilterTableComponent },
  { path: 'buttons', component: PageButtonsComponent },
  { path: 'cards', component: PageCardsComponent },
  { path: 'inputs', component: PageInputsComponent },
  { path: 'checkboxes', component: PageCheckboxesComponent },
  { path: 'switchers', component: PageSwitchersComponent },
  { path: 'radio-buttons', component: PageRadioButtonsComponent },
  { path: 'textareas', component: PageTextareasComponent },
  { path: 'tabs', component: PageTabsComponent },
  { path: 'accordions', component: PageAccordionsComponent },
  { path: 'simple-tables', component: PageSimpleTablesComponent },
  { path: 'progress', component: PageProgressComponent },
  { path: 'lists', component: PageListComponent },
  { path: 'sorting-table', component: PageSortingTableComponent },
  { path: 'pagination-table', component: PagePaginationTableComponent },
  { path: 'search-table', component: PageSearchTableComponent },
  { path: 'form-elements', component: PageFormElementsComponent },
  { path: 'todo-list', component: PageToDoComponent },
  { path: 'inbox', component: PageInboxComponent },
  { path: 'calendar', component: PageCalendarComponent },
  { path: 'chat', component: PageChatComponent },
  { path: 'contacts', component: PageContactsComponent },
  { path: 'taskboard', component: PageTaskboardComponent },
  { path: 'todo-list', component: PageToDoComponent },
  { path: 'inbox', component: PageInboxComponent },
  { path: 'calendar', component: PageCalendarComponent },
  { path: 'contacts', component: PageContactsComponent },
  { path: 'autocompletes', component: PageAutocompletesComponent },
  { path: 'ng2-charts', component: PageNg2ChartsComponent },
  { path: 'ngx-charts', component: PageNgxChartsComponent },
  { path: 'google-maps', component: PageGoogleMapsComponent },
  { path: 'leaflet-maps', component: PageLeafletMapsComponent },
  { path: 'pricing', component: PagePricingComponent },
  { path: 'invoice', component: PageInvoiceComponent },
  { path: 'faq', component: PageFaqComponent },
  { path: 'badges', component: PageBadgesComponent },
  { path: 'chart-widgets', component: PageChartWidgetsComponent },
  { path: 'data-widgets', component: PageDataWidgetsComponent },
  { path: 'media-widgets', component: PageMediaWidgetsComponent },
  { path: 'log-in', component: PageLoginComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '500', component: PageInternalErrorComponent },
  { path: 'typography', component: PageTypographyComponent },
  { path: 'timeline', component: PageTimelineComponent },
  { path: 'v-timeline', component: PageVTimelineComponent },
  { path: 'selects', component: PageSelectsComponent },
  { path: 'form-layout', component: PageFormLayoutsComponent },
  { path: 'form-validation', component: PageFormValidationComponent },
  { path: 'icons', component: PageIconsComponent },
  { path: 'sliders', component: PageSlidersComponent },
  { path: 'notifications', component: PageNotificationsComponent },
  { path: 'alerts', component: PageAlertsComponent },
  { path: 'ratings', component: PageRatingsComponent },
  { path: 'dropdowns', component: PageDropdownsComponent },
  { path: 'travel-dashboard', component: PageTravelComponent },
  { path: 'form-wizard', component: PageFormWizardComponent }
];

const EXTRA_ROUTES: Routes = [
  { path: '404', component: PageNotFoundComponent },
  { path: '500', component: PageInternalErrorComponent },
  { path: 'log-in', component: PageLoginComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const ROUTES: Routes = [
  {
    path: '',
    component: VerticalLayoutComponent,
    children: DEFAULT_ROUTES
  },
  {
    path: '**',
    component: ExtraLayoutComponent,
    children: EXTRA_ROUTES
  }
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class RoutingModule { }
