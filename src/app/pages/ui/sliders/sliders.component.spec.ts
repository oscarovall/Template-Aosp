import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSlidersComponent } from './sliders.component';

describe('PageSlidersComponent', () => {
  let component: PageSlidersComponent;
  let fixture: ComponentFixture<PageSlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
