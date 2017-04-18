import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  popularList : Array <Object>;
  theathers   : Array <Object>;
  searchStr   : string; 
  searchRes   : Array<Object>;
  

  constructor(private _moviesService : MoviesService) {
     this._moviesService.getpopular().subscribe(res =>{
         this.popularList = res.results;
     });
     
     this._moviesService.getInTheaters().subscribe(res =>{
         this.theathers = res.results;
     });
   }

   searchMovies(){
     this._moviesService.searchMovies(this.searchStr).subscribe(res => {
        this.searchRes = res.results;
     })
   }

  ngOnInit() {
  }

}
