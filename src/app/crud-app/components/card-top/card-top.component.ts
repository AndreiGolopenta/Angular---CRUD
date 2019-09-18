import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CrudService } from '../../services/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-top',
  templateUrl: './card-top.component.html',
  styleUrls: ['./card-top.component.scss'],
})
export class CardTopComponent implements OnInit {
  navStatus: boolean = true;
  width: string = `${window.innerWidth - 46}px`;

  @Input()
  jokeNumber: number;

  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit() {
    this.crudService.getTotalJokesNumber.subscribe((data: number) => {
      this.jokeNumber = data;
    })
  }


  sideNavOpenClose() {
    this.navStatus = !this.navStatus;
    this.crudService.sideNavToggle(this.navStatus);
  }
}
