import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';

// pipe
import { TitleCasePipe } from './crud-app/components/joke-detail/title-case.pipe';

// containers
import { CrudAppComponent } from './crud-app/containers/crud-app/crud-app.component';
import { DisplayJokesComponent } from './crud-app/containers/display-jokes/display-jokes.component';

// components
import { CardTopComponent } from './crud-app/components/card-top/card-top.component';
import { SideNavComponent } from './crud-app/components/side-nav/side-nav.component';
import { HomeComponent } from './crud-app/components/home/home.component';
import { SideNavButtonComponent } from './crud-app/components/side-nav-button/side-nav-button.component';
import { InsertJokeComponent } from './crud-app/components/insert-joke/insert-joke.component';
import { JokeDetailComponent } from './crud-app/components/joke-detail/joke-detail.component';
import { DialogDeleteComponent } from './crud-app/components/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from './crud-app/components/dialog-edit/dialog-edit.component';
import { ViewSettingsComponent } from './crud-app/components/view-settings/view-settings.component';
import { SearchComponent } from './crud-app/components/search/search.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'insert-joke', component: InsertJokeComponent },
  { path: 'display-jokes', component: DisplayJokesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CrudAppComponent,
    CardTopComponent,
    SideNavComponent,
    HomeComponent,
    SideNavButtonComponent,
    DisplayJokesComponent,
    InsertJokeComponent,
    JokeDetailComponent,
    TitleCasePipe,
    DialogDeleteComponent,
    DialogEditComponent,
    ViewSettingsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogDeleteComponent,
    DialogEditComponent
  ]
})
export class AppModule { }
