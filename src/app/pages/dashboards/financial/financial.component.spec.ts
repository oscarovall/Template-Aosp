import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFinancialComponent } from './financial.component';

describe('PageFinancialComponent', () => {
  let component: PageFinancialComponent;
  let fixture: ComponentFixture<PageFinancialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFinancialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
