import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../classes/movie';
import { movie_mocks } from './movie_mocks';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  allGenres: any = []
  movies: any = []
  movieGenres: any = []

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

  getMoviesByGenre(genre: String): Observable<any> {

    this.movieGenres = []

    movie_mocks.map(show => {
      show.genres.map(type => {
        if(type === genre) {
          this.movieGenres.push(show) 
        }
      })
    })
    return this.movieGenres
  }

  getAllGenres(): Observable<any> {

    let genres: any = []
    
    movie_mocks.map(show => {
      show.genres.map((type: any) => {
         genres.push(type)
      })
    })
    this.allGenres = genres.filter((item: String, pos: Number) => {
      return genres.indexOf(item) == pos
    })
    return this.allGenres
  }
}
