import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridContainerLayoutComponent } from './grid-container-layout.component';

describe('GridContainerLayoutComponent', () => {
  let component: GridContainerLayoutComponent;
  let fixture: ComponentFixture<GridContainerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridContainerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridContainerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
