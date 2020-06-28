import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service'
@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit {

  pelisMostrar : object;
  constructor(public MoviesService:MoviesService) { }

  ngOnInit() {
    this.MoviesService.getPopularMovies()
    .subscribe(
      res => this.pelisMostrar = res,
      error => console.error(error),
      () => console.log(this.pelisMostrar)
    )
  }

}
