import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  position: string = `${window.innerHeight / 4}px`;

  items: string[] = [
    'Create',
    'Read',
    'Delete',
    'Update',
    'Search content after title & content',
    'Filter by category'
  ];

  constructor() { }

  ngOnInit() {
  }

}
