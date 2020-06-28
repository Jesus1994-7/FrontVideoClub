import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public MovieService:MoviesService) { }

  ngOnInit(): void {
  }

  searchTitle(event){
    if(event.target.value.length >= 3){
      this.MovieService.searchMoviesTitle(event.target.value)
      .subscribe(res=>this.MovieService.setMovies(res));
    }
  }



}
