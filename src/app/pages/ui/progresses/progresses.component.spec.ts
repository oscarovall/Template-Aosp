import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProgressComponent } from './progresses.component';

describe('PageProgressComponent', () => {
  let component: PageProgressComponent;
  let fixture: ComponentFixture<PageProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
