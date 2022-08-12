import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../classes/movie';
import { movie_mocks } from './movie_mocks';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //movies = of(movie_mocks)
  movies: any = []
  //movies: Observable<any>

  constructor() {}

  getMovieById(id: String){

    let movie = {}

    movie_mocks.map(data => {
      if(data._id === id){
        movie = data
      }
    })
    return movie
  }

  getAllMovies(): Observable<any> {
    movie_mocks.map(show => {
      this.movies.push(show)
    })
    return this.movies
  }
}
