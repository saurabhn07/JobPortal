import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
 
 lognav(){
   this.router.navigate(['/login']);
 }

 lognav1(){
  this.router.navigate(['/emplogin']);
}

}
