import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jobapplyserviceService } from '../jobapplyservice.service';
@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {
  jobseekerData: any = {
    jobname: '',
    jobid:'',
    jsid: '',
  };
  submitted = false;
  constructor(private eservice:jobapplyserviceService, public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.jobseekerData.jobid); 
    this.eservice
    .applyJob(this.jobseekerData)
    alert('Applied for job successfully!');
    this.router.navigate(['/viewjobs']);
  }

}
