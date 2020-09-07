import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDataWidgetsComponent } from './data-widgets.component';

describe('PageDataWidgetsComponent', () => {
  let component: PageDataWidgetsComponent;
  let fixture: ComponentFixture<PageDataWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDataWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDataWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
