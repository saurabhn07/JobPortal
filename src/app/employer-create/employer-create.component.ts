import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employer-create',
  templateUrl: './employer-create.component.html',
  styleUrls: ['./employer-create.component.css']
})
export class EmployerCreateComponent implements OnInit {
  @Input()
  employerDetails: any = {
    ename: '',
    email: '',
    password: '',
    phone: '',
  };

  submitted = false;

  constructor(private service: EmpserviceService, public router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    alert('Employer datas are validated successfully!');
  }

  addEmployer() {
    console.log('From emp.comp.ts ' + this.employerDetails);
    this.service.createEmployer(this.employerDetails)
    .subscribe((data: {}) => this.router.navigate(['/emplogin']));
    this.router.navigate(['/emplogin']);
  }
}

