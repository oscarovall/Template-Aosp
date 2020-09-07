import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientActivityComponent } from './client-activity.component';

describe('ClientActivityComponent', () => {
  let component: ClientActivityComponent;
  let fixture: ComponentFixture<ClientActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
