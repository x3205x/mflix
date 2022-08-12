import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie: any = {}

  constructor(
    public api: MoviesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")
    this.getId(id)
  }

  getId(id: any){
    this.movie = this.api.getMovieById(id)
    console.log(this.movie)
  }

}
