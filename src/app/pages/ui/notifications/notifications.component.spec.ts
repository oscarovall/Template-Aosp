import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotificationsComponent } from './notifications.component';

describe('PageNotificationsComponent', () => {
  let component: PageNotificationsComponent;
  let fixture: ComponentFixture<PageNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
