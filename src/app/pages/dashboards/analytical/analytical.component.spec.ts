import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnalyticalComponent } from './analytical.component';

describe('PageAnalyticalComponent', () => {
  let component: PageAnalyticalComponent;
  let fixture: ComponentFixture<PageAnalyticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAnalyticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAnalyticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
