import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLayoutAbsolutFrameComponent } from './custom-layout-absolut-frame.component';

describe('CustomLayoutAbsolutFrameComponent', () => {
  let component: CustomLayoutAbsolutFrameComponent;
  let fixture: ComponentFixture<CustomLayoutAbsolutFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLayoutAbsolutFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLayoutAbsolutFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
