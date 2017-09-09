import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetWrapperComponent } from './dashboard-widget-wrapper.component';

describe('DashboardWidgetWrapperComponent', () => {
  let component: DashboardWidgetWrapperComponent;
  let fixture: ComponentFixture<DashboardWidgetWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWidgetWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWidgetWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
