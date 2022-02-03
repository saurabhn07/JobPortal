import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsserviceService } from '../jsservice.service';
@Component({
  selector: 'app-employer-edit',
  templateUrl: './jobseeker-edit.component.html',
  styleUrls: ['./jobseeker-edit.component.css']
})
export class JobseekerEditComponent implements OnInit {
  public jobseekerData: any = {};
  submitted = false;

  //public jsid: any = this.aroute.snapshot.params['jsid'];
  //public selectedId: any;
  onSubmit() {
    this.submitted = true;
    alert('Jobseeker datas are validated successfully!');
  }
  constructor(
    private service: JsserviceService,
    public router: Router,
    private aroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //console.log('from ng oninit' + this.jsid);
    //this.service
      //.getJobseeker(this.jsid)
      //.subscribe((data) => (this.jobseekerData = data));
  }

  updateJobseeker() {
    console.log(' Jobseeker Data ----->' + this.jobseekerData);
    this.service
      .updateJobseeker(this.jobseekerData)
      .subscribe((data: {}) => this.router.navigate(['/viewemp']));
  }
}
