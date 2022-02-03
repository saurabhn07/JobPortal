import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { JsserviceService } from '../jsservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-jobseeker-create',
  templateUrl: './jobseeker-create.component.html',
  styleUrls: ['./jobseeker-create.component.css']
})
export class JobseekerCreateComponent implements OnInit {
  @Input()
  jobseekerDetails: any = {
    jsname: '',
    email: '',
    password: '',
    phone: '',
    educationDetails:'',
    location:'',
    experiance:'',
  };

  submitted = false;

  constructor(private service: JsserviceService, public router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    alert('Jobseeker datas are validated successfully!');
  }

  addJobseeker() {
    console.log('From emp.comp.ts ' + this.jobseekerDetails);
    this.service.createJobseeker(this.jobseekerDetails).subscribe((data: {}) => this.router.navigate(['/login']));
    this.router.navigate(['/login']);
  }
}

