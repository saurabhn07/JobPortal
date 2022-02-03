import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { loginData } from '../loginData';
import { EmploginserviceService } from '../emploginservice.service';



@Component({
  selector: 'employer-login-create',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css'],
  
})
export class EmployerLoginComponent implements OnInit {
  bool:boolean=false;
  loginData: any = {};
 // email:string='d';
  public newData:any= [] as any;
  submitted = false;
  selectedMail:string='e';
  myData=this.loginData.email;

  constructor(private service: EmploginserviceService, public router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    alert('Jobs datas are validated successfully!');
  }

  addEmp() {
     this.selectedMail=this.myData;
     console.log(this.loginData.username);
     this.service.getEmployer(this.loginData.username)
     .subscribe((data) => (this.newData = data));
     console.log(this.newData);
     if (this.newData.password==this.loginData.password){
          this.bool=true;
          this.adddJobs();
     }
  }
  adddJobs() {
    console.log('this.newData.password');
    this.router.navigate(['/empoptions'])
}

}

