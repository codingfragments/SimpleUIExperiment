import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error4xxComponent } from './error4xx.component';

describe('Error4xxComponent', () => {
  let component: Error4xxComponent;
  let fixture: ComponentFixture<Error4xxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error4xxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error4xxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
