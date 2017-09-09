import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStaticFullComponent } from './dashboard-static-full.component';

describe('DashboardStaticFullComponent', () => {
  let component: DashboardStaticFullComponent;
  let fixture: ComponentFixture<DashboardStaticFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStaticFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStaticFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
