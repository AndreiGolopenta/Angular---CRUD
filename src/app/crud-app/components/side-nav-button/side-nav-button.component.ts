import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Button } from '../../models/button.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-button',
  templateUrl: './side-nav-button.component.html',
  styleUrls: ['./side-nav-button.component.scss'],
})
export class SideNavButtonComponent implements OnInit {
  @Input()
  button: Button;

  @Output()
  selectButton: EventEmitter<Button> = new EventEmitter<Button>();

  constructor(private router: Router) {}

  ngOnInit() {}

  buttonAction(route: string) {
    this.button.value = !this.button.value;
    this.selectButton.emit(this.button);
    this.router.navigate([route]);
  }
}
