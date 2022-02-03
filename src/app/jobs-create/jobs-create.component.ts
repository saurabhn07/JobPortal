import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { JobserviceService } from '../jobservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-jobseeker-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css']
})
export class JobsCreateComponent implements OnInit {
  @Input()
  jobsDetails: any = {
    jobname: '',
    educationDetails:'',
    jobLocation: '',
    experiance: '',
    phone:'',
    address:'',
  };

  submitted = false;

  constructor(private service: JobserviceService, public router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    alert('Jobs datas are validated successfully!');
  }

  addJobs() {
    console.log('From emp.comp.ts ' + this.jobsDetails);
    this.service.createJobs(this.jobsDetails).subscribe((data: {}) => this.router.navigate(['/viewemp']));
  }
}

