import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayJokesComponent } from './display-jokes.component';

describe('DisplayJokesComponent', () => {
  let component: DisplayJokesComponent;
  let fixture: ComponentFixture<DisplayJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
