import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  movies: any = []

  constructor(
    public api: MoviesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let genre = this.route.snapshot.paramMap.get("genre")
    this.getGenres(genre)
  }

  getGenres(genre: any){
    this.movies = this.api.getMoviesByGenre(genre)
    console.log(this.movies)
  }

}
