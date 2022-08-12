import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  open: any = false

  constructor() {
    
   }

  ngOnInit(): void {
  }

  toggleNav(){
   this.open = !this.open
   console.log("clicked")
  }

}
