import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobserviceService } from '../jobservice.service';
@Component({
  selector: 'app-jobs-edit',
  templateUrl: './jobs-edit.component.html',
  styleUrls: ['./jobs-edit.component.css']
})
export class JobsEditComponent implements OnInit {
  public jobsData: any = {};
  submitted = false;

 // public jobid: any = this.aroute.snapshot.params['jobid'];
 // public selectedId: any;
  onSubmit() {
    this.submitted = true;
    alert('Jobs datas are validated successfully!');
  }
  constructor(
    private service: JobserviceService,
    public router: Router,
    private aroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
   // console.log('from ng oninit' + this.jobid);
    //this.service
     // .getJobs(this.jobid)
      //.subscribe((data) => (this.jobsData = data));
  }

  updateJobs() {
    console.log(' Jobs Data ----->' + this.jobsData);
    this.service
      .updateJobs(this.jobsData)
      .subscribe((data: {}) => this.router.navigate(['/viewemp']));
  }
}
