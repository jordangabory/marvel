import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { FilmComponent } from './film/film.component';
const routes: Routes = [
  {
    path: '', component: MovieComponent
  }, 
  {
    path : 'film/:id', component: FilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
