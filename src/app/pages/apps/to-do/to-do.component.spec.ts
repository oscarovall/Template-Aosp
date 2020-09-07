import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageToDoComponent } from './to-do.component';

describe('PageToDoComponent', () => {
  let component: PageToDoComponent;
  let fixture: ComponentFixture<PageToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
