import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-view-settings',
  templateUrl: './view-settings.component.html',
  styleUrls: ['./view-settings.component.scss']
})
export class ViewSettingsComponent implements OnInit, OnChanges {

  panelOpenState = false;
  categoryRemovedDuplicates: string[] = [];

  @Input()
  category: string[];

  @Input()
  deleteJoke: boolean;

  cloneCategory: string[];

  @Output()
  sendCategories: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output()
  sendDeleteJoke: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.category.map((item: string) => {
      if (this.categoryRemovedDuplicates.indexOf(item) === -1) {
        this.categoryRemovedDuplicates.push(item)
      }
    });

    this.cloneCategory = [...this.categoryRemovedDuplicates];
    if (this.deleteJoke) {
      this.sendDeleteJoke.emit(false);
    }
    
  }

  ngOnChanges(changes) {
    if (changes.deleteJoke) {
      this.cloneCategory = [...this.categoryRemovedDuplicates];
    }
  }
  

  selectedCategories(event: string[]) {
    this.sendCategories.emit(event);
  }

}

