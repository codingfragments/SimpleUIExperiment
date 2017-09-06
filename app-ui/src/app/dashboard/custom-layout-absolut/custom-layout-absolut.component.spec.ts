import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLayoutAbsolutComponent } from './custom-layout-absolut.component';

describe('CustomLayoutAbsolutComponent', () => {
  let component: CustomLayoutAbsolutComponent;
  let fixture: ComponentFixture<CustomLayoutAbsolutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLayoutAbsolutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLayoutAbsolutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
