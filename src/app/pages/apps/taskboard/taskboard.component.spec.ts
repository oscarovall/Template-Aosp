import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTaskboardComponent } from './taskboard.component';

describe('PageTaskboardComponent', () => {
  let component: PageTaskboardComponent;
  let fixture: ComponentFixture<PageTaskboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTaskboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTaskboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
