import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavButtonComponent } from './side-nav-button.component';

describe('SideNavButtonComponent', () => {
  let component: SideNavButtonComponent;
  let fixture: ComponentFixture<SideNavButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
