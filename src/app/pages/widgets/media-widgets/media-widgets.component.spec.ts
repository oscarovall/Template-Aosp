import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMediaWidgetsComponent } from './media-widgets.component';

describe('PageMediaWidgetsComponent', () => {
  let component: PageMediaWidgetsComponent;
  let fixture: ComponentFixture<PageMediaWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMediaWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMediaWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
