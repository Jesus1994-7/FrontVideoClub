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
  //ENLACES CON BACKEND

  //Todas las peliculas
  getMovies():Observable<any>{
    return this.httpClient.get(this.backUrl + 'allmovies')
  }
  //Las mas populares
  getPopularMovies():Observable<any> {
    return this.httpClient.get(this.backUrl + 'mostpopular')
  }
  //Las ultimas peliculas
  getLastFilms():Observable<any> {
    return this.httpClient.get(this.backUrl + 'lastmovies')
  }
  //Detalles de las peliculas
  locateMovies(MovieChoose:any):object {
    this.MoviesChoosen = MovieChoose;
    console.log(this.MoviesChoosen)
    return;
  }
//Busqueda por titulo
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
