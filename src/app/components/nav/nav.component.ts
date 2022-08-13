import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  open: any = false
  allGenres: any = []

  constructor(public api: MoviesService) {}

  ngOnInit(): void {
    this.getGenres()
  }

  toggleNav(){
   this.open = !this.open
   console.log("clicked")
  }

  getGenres(){
    this.allGenres = this.api.getAllGenres()
    console.log(this.allGenres)
  }

}
