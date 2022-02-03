import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  regnav(){
      this.router.navigate(['/createjs']);
  }

  regnav1(){
    this.router.navigate(['/createemployer']);
  }

}
