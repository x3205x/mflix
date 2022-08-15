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
  genre: any = ""

  constructor(
    public api: MoviesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.genre = this.route.snapshot.paramMap.get("genre")
    this.getGenres(this.genre)
  }

  getGenres(genre: any){
    this.movies = this.api.getMoviesByGenre(genre)
    console.log(this.movies)
  }

}
