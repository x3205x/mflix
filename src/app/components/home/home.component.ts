import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any = []

  constructor(public api: MoviesService) { }

  ngOnInit(): void {
    this.getMovies()

  }

  getMovies(){
    this.movies = this.api.getAllMovies()
    console.log(this.movies)
  }
}
