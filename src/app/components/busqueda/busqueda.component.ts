import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  constructor(public MoviesService:MoviesService) { }

  ngOnInit(): void {
  }
  searchTitle(event){
    if(event.target.value.lenght >= 3){
      this.MoviesService.searchMoviesTitle(event.target.value)
      .subscribe(res=>this.MoviesService.setMovies(res));
    }
  }
}
