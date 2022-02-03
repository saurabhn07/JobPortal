import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['/viewemployer']);
  }

}
