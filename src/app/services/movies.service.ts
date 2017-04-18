import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
  private apiKey : string;

  constructor(private _http: Http) {
     this.apiKey = 'f9ea396d830c27593fd6612b6b4ed2db';
     console.log('MoviesService Initialized ...');
   }

   getpopular(){
     return  this._http.get('https://api.themoviedb.org/3/movie/popular?api_key='+this.apiKey+'&language=en-US&page=1')
            .map(res => res.json());
   }

   getInTheaters(){
     return this._http.get('https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key='+this.apiKey)
            .map(res => res.json());
   }

   searchMovies(searchStr : string){
     return this._http.get('https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query='+searchStr+'&language=en-US&api_key='+this.apiKey)
            .map(res => res.json());
   }

   getMovie(id:string){
     return  this._http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apiKey)
     .map(res =>res.json());
   }
}
