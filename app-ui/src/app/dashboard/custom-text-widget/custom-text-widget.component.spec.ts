import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTextWidgetComponent } from './custom-text-widget.component';

describe('CustomTextWidgetComponent', () => {
  let component: CustomTextWidgetComponent;
  let fixture: ComponentFixture<CustomTextWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTextWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTextWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
