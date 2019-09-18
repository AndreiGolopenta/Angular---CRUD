import { Component, OnInit } from '@angular/core';

import { Joke } from '../../models/joke.interface';

import { CrudService } from '../../services/crud-service.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../../components/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from '../../components/dialog-edit/dialog-edit.component';
import { Button } from '../../models/button.interface';

@Component({
  selector: 'app-display-jokes',
  templateUrl: './display-jokes.component.html',
  styleUrls: ['./display-jokes.component.scss'],
})
export class DisplayJokesComponent implements OnInit {
  jokes: Joke[];
  showCategory: string[] = [];
  deleteJoke: boolean = false;

  constructor(
    private crudService: CrudService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  getJokes() {
    this.crudService.getJokes().subscribe((data: Joke[]) => {
      this.jokes = data;
      this.crudService.updateTotalJokesNumber(data.length);
      this.jokes.map((joke: Joke) => {
        joke.search = false;
      });
    });
  }

  ngOnInit() {
    this.crudService.sendSelectedCategory.subscribe((data: string[]) => {
      this.showCategory = data;
    });

    this.getJokes();

    this.crudService.tabSelected.subscribe((data: Button) => {
      if (data.route === '/display-jokes') {
        this.getJokes();
      }
    });
  }

  handleDelete(event: Joke) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: event.title,
    });
    dialogRef.componentInstance.deleteAction.subscribe(() => {
      dialogRef.afterClosed().subscribe(() => {
        this.crudService.deleteJoke(event.id).subscribe((data: Joke) => {
          this.jokes = this.jokes.filter((joke: Joke) => {
            return joke.id !== event.id;
          });
          this.showCategory = this.showCategory.filter((item: string) => {
            return item !== event.category;
          });
          this.deleteJoke = true;
        });
        this._snackBar.open(`${event.title}`, 'Was deleted', {
          duration: 2000,
        });
        this.crudService.updateTotalJokesNumber(this.jokes.length - 1);
      });
    });
    
  }

  handleEdit(event: Joke) {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '500px',
      data: { joke: event, selectOptions: this.showCategory },
    });
    dialogRef.componentInstance.editAction.subscribe((data: Joke) => {
      dialogRef.afterClosed().subscribe(() => {
        this.crudService.updateJoke(data).subscribe(() => {
          this.getJokes();
        });
        this._snackBar.open(`${event.title}`, 'Was edited', { duration: 2000 });
      });
    });
  }

  handleCategories(data: string[]) {
    this.showCategory = data;
  }

  handleDeleteOutput(data: boolean) {
    this.deleteJoke = false;
  }

  handleSearch(searchInput: string) {
    this.jokes.map((joke: Joke) => {
      if (
        joke.title.toLowerCase().indexOf(searchInput) !== -1 ||
        joke.content.toLowerCase().indexOf(searchInput) !== -1
      ) {
        joke.search = false;
      } else {
        joke.search = true;
      }
    });
  }
}
