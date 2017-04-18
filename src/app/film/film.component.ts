import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {MoviesService} from '../services/movies.service';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  private film : Object;
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private _movieService: MoviesService){}
  ngOnInit() {
    this.route.params.subscribe((params)=> {
      let id =  params['id'];
      this._movieService.getMovie(id).subscribe(film => {
        this.film = film;
      })
    })
  }

}
