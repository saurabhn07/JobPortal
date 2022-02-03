import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobseeker } from '../jobseeker';
import { JsserviceService } from '../jsservice.service';

@Component({
  selector: 'app-jobseeker-list',
  templateUrl: './jobseeker-list.component.html',
  styleUrls: ['./jobseeker-list.component.css'],
})
export class JobseekerListComponent implements OnInit {
  public jobseekers = [] as any;
  constructor(private eservice: JsserviceService, private router: Router,
   ) {}
  public selectedId: number = 0;
 

  ngOnInit(): void {
    this.eservice
      .getJobseekersFromService()
      .subscribe((data) => (this.jobseekers = data));
      console.log('dfs');
  }

  onDelete(emp: Jobseeker) {
    this.selectedId = emp.jsid;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.eservice
        .deleteJobseeker(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/viewemp']));
    }
  }
}
