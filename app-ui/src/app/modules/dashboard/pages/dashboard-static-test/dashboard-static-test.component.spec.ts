import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStaticTestComponent } from './dashboard-static-test.component';

describe('DashboardStaticTestComponent', () => {
  let component: DashboardStaticTestComponent;
  let fixture: ComponentFixture<DashboardStaticTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStaticTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStaticTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
