import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.scss']
})
export class ListFilmsComponent implements OnInit {
  
  pelisMostrar:object;

  constructor(public MoviesService:MoviesService) { }

  ngOnInit() {

      this.MoviesService.getMovies()
      .subscribe(
        res=> this.pelisMostrar = res,
        error => console.error(error),
        () => console.log("este es el MITICO console log", this.pelisMostrar)
      )

  }

}
