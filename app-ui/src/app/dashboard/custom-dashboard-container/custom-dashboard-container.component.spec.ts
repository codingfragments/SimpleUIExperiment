import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDashboardContainerComponent } from './custom-dashboard-container.component';

describe('CustomDashboardContainerComponent', () => {
  let component: CustomDashboardContainerComponent;
  let fixture: ComponentFixture<CustomDashboardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDashboardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
