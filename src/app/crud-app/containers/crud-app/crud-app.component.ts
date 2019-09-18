import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud-service.service';
import { Joke } from '../../models/joke.interface';

@Component({
  selector: 'app-crud',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.scss'],
})
export class CrudAppComponent implements OnInit {

  category: string[] = [];
  jokeNumber: number;

  constructor(private crudService: CrudService) {}

  ngOnInit() {

    this.crudService.getJokes().subscribe((data: Joke[]) => {
      this.jokeNumber = data.length;
      data.map((joke: Joke) => {
        this.category.indexOf(joke.category) === -1 ? this.category.push(joke.category) : null;
      });
    });

    this.crudService.sendAvailableCategory(this.category);
  }

}
