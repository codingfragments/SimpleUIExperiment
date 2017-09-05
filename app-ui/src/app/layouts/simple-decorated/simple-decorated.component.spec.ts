import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDecoratedComponent } from './simple-decorated.component';

describe('SimpleDecoratedComponent', () => {
  let component: SimpleDecoratedComponent;
  let fixture: ComponentFixture<SimpleDecoratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDecoratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDecoratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
