import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'; 
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RentListComponent } from './rent-list/rent-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    RentListComponent,
    MovieDetailComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
