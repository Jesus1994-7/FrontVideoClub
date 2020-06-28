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
  getPopularMovies():Observable<any> {
    return this.httpClient.get(this.backUrl + 'mostpopular')
  }
  getLastFilms():Observable<any> {
    return this.httpClient.get(this.backUrl + 'lastmovies')
  }
  locateMovies(MovieChoose:any):object {
    this.MoviesChoosen = MovieChoose;
    console.log(this.MoviesChoosen)

    return;
  }

  searchMoviesTitle(title:string):Observable<any>{
    return this.httpClient.get(this.backUrl + 'title/' + title);
  }

  setMovies(movies:object[]):void{
    this.movies = movies
  }

  getFilms():object {
    return this.movies
  }
}
