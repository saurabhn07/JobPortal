import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { loginData } from '../loginData';



@Component({
  selector: 'app-jobseeker-create',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  bool:boolean=false;
  loginData: any = {};
  public newData:any= [] as any;
  title : number = 0;
  submitted = false;
  constructor(private service: LoginserviceService, public router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    alert('Jobs datas are validated successfully!');
  }

  addJobs() {
     console.log(this.loginData.email)
     this.service.getJobseeker(this.loginData.username)
     .subscribe((data) => (this.newData = data));
      this.title=this.newData.jsid;
    
     console.log(this.newData);
     if (this.newData.password==this.loginData.password){
          this.bool=true;
          this.adddJobs();
     }
  }
  adddJobs() {
   
    console.log('this.newData.password');
    this.service.getJobseeker(this.loginData.username)
    .subscribe((data:{}) => this.router.navigate(['/jsoptions']));
}

}

