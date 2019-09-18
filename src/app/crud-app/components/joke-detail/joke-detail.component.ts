import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../models/joke.interface';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.scss']
})
export class JokeDetailComponent implements OnInit {

  @Input()
  detail: Joke;

  @Output()
  deleteJoke: EventEmitter<Joke> = new EventEmitter<Joke>();

  @Output()
  editJoke: EventEmitter<Joke> = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
  }

  delete(joke: Joke) {
    this.deleteJoke.emit(joke);
  }

  edit(joke: Joke) {
    this.editJoke.emit(joke);
  }

}
