import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service'

@Component({
  selector: 'app-last-movies',
  templateUrl: './last-movies.component.html',
  styleUrls: ['./last-movies.component.scss']
})
export class LastMoviesComponent implements OnInit {

  pelisMostrar:object;
  constructor(public MoviesService:MoviesService) { }

  ngOnInit(){
    this.MoviesService.getLastFilms()
    .subscribe(
      res => this.pelisMostrar = res,
      error => console.log(error),
      () => console.log(this.pelisMostrar)
    )
  }

}
