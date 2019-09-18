import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CrudService } from '../../services/crud-service.service';
import { Joke } from '../../models/joke.interface';

@Component({
  selector: 'app-insert-joke',
  templateUrl: './insert-joke.component.html',
  styleUrls: ['./insert-joke.component.scss']
})
export class InsertJokeComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  width: string = `${window.innerWidth - 250}px`;
  id: number;

  category: string[];

  constructor(
    private crudService : CrudService,
    private _formBuilder: FormBuilder
    ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      content: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      category: ['', Validators.required]
    });
  }


  submitJoke() {
    this.crudService.getJokes().subscribe((data: Joke[]) => {
      this.id = data.length;
    });
    const value = {
      id: this.id,
      title: this.firstFormGroup.value.title,
      content: this.secondFormGroup.value.content,
      category: this.thirdFormGroup.value.category,
      search: false,
      titlePart1: '',
      titlePart2: '',
      titlePart3: '',
    } 
    this.crudService.insertJoke(value).subscribe();
    this.crudService.chooseTab({
      name: 'Display Jokes',
      icon: 'table_chart', 
      value: true, 
      route: '/display-jokes'
    });

    this.crudService.sendSelectedCategory.subscribe((data: string[]) => {
      data.push(this.thirdFormGroup.value.category);
      this.category = data;
    });
    
  }

}
