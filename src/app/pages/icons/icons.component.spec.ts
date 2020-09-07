import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIconsComponent } from './icons.component';

describe('PageIconsComponent', () => {
  let component: PageIconsComponent;
  let fixture: ComponentFixture<PageIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
