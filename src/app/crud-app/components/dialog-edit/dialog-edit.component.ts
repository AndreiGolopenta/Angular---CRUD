import { Component, OnInit, EventEmitter, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Joke } from '../../models/joke.interface';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Joke
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editAction: EventEmitter<Joke> = new EventEmitter<Joke>();

  updateJoke(updataJoke: Joke, id: number) {
    updataJoke.id = id;
    this.editAction.emit(updataJoke);
  }
}
