import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertJokeComponent } from './insert-joke.component';

describe('InsertJokeComponent', () => {
  let component: InsertJokeComponent;
  let fixture: ComponentFixture<InsertJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
