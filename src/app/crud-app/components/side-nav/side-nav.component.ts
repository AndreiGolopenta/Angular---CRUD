import { Component, OnInit, Input } from '@angular/core';

import { Button } from '../../models/button.interface';

import { CrudService } from '../../services/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  buttonSelect: boolean = false;
  buttons: Button[] = [
    {name: 'Home', icon: 'home', value: true, route: '/'},
    {name: 'Display Jokes', icon: 'table_chart', value: false, route: '/display-jokes'},
    {name: 'Insert Joke', icon: 'input', value: false, route: '/insert-joke'}
  ]

  @Input()
  opened: boolean;

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
    this.crudService.actualSideNavStatus.subscribe( (data: boolean) => {
      this.opened = data;
    });

    this.crudService.tabSelected.subscribe((data: Button) => {
      this.buttons.map((button: Button) => {
        button.route === data.route ? button.value = true : button.value = false;
        this.router.navigate([data.route]);
      });
    })

  }

  handleSelectButton(event: Button) {
    this.buttons.map( (data: Button) => {
      data.name !== event.name ? data.value = false : data.value = true;
    });
  }

}
