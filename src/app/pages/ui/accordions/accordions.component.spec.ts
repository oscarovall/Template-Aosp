import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccordionsComponent } from './accordions.component';

describe('PageAccordionsComponent', () => {
  let component: PageAccordionsComponent;
  let fixture: ComponentFixture<PageAccordionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAccordionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
