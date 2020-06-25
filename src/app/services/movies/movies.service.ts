import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  backUrl = 'http://localhost:3000/movies/'

  movies: object[];
  MoviesChoosen: object[];

  constructor(private httpClient:HttpClient) { }
  
  getMovies():Observable<any>{
    return this.httpClient.get(this.backUrl + 'allmovies')
  }

  locateMovies(MovieChoose:any):object {
    this.MoviesChoosen = MovieChoose;
    console.log(this.MoviesChoosen)

    return;
  }

  setMovies(movies:object[]):void{
    this.movies = movies
  }

  getFilms():object {
    return this.movies
  }
}
