import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremIpsumWidgetComponent } from './lorem-ipsum-widget.component';

describe('LoremIpsumWidgetComponent', () => {
  let component: LoremIpsumWidgetComponent;
  let fixture: ComponentFixture<LoremIpsumWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoremIpsumWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremIpsumWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
