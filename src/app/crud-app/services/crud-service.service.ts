import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Joke } from '../models/joke.interface';

import { HttpClient } from '@angular/common/http';
import { Button } from '../models/button.interface';

const JOKES_API = 'http://localhost:3000/jokes';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  private sideNavOpenClose = new BehaviorSubject(true);

  actualSideNavStatus: Observable<
    boolean
  > = this.sideNavOpenClose.asObservable();

  sideNavToggle(value: boolean) {
    return this.sideNavOpenClose.next(value);
  }

  getJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(JOKES_API);
  }

  deleteJoke(id: number): Observable<Joke> {
    return this.http.delete<Joke>(`${JOKES_API}/${id}`);
  }

  updateJoke(joke: Joke): Observable<Joke> {
    return this.http.put<Joke>(`${JOKES_API}/${joke.id}`, joke);
  }

  insertJoke(joke: Joke): Observable<Joke> {
    return this.http.post<Joke>(`${JOKES_API}`, joke);
  }

  private tabSelect = new BehaviorSubject({
    name: '',
    icon: '',
    value: false,
    route: '/',
  });

  tabSelected: Observable<Button> = this.tabSelect.asObservable();

  chooseTab(value: Button) {
    return this.tabSelect.next(value);
  }

  // manage initial categories

  private sendCategory = new BehaviorSubject([null]);

  sendSelectedCategory: Observable<string[]> = this.sendCategory.asObservable();

  sendAvailableCategory(value: string[]) {
    return this.sendCategory.next(value);
  }


  private totalJokesNumber = new BehaviorSubject(null);

  getTotalJokesNumber: Observable<number> = this.totalJokesNumber.asObservable();

  updateTotalJokesNumber(value: number) {
    return this.totalJokesNumber.next(value);
  }


}
