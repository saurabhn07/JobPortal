import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from '../jobs';
import { jobapplyserviceService } from '../jobapplyservice.service';
import { JobserviceService } from '../jobservice.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent implements OnInit {
  public jobss = [] as any;
  constructor(private eservice: JobserviceService,private eeservice: jobapplyserviceService, private router: Router) {}
  public selectedId: number = 0;
  public jobapply = [] as any;
  ngOnInit(): void {
    this.eservice
      .getJobssFromService()
      .subscribe((data) => (this.jobss = data));
      this.jobapply.jobid=this.jobss.jobid;
      this.jobapply.jobname=this.jobss.jobname;
      this.jobapply.jsid=1;
      console.log(this.jobss.jobid);
  }

  onDelete(jb: Jobs) {
    this.selectedId = jb.jobid;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.eservice
        .deleteJobs(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/viewemp']));
    }
  }
  
  applyJob(){
    this.router.navigate(['/jobapply'])
  }
   
  /*applyJobs(jb:jobapply){
    this.eeservice
    .applyJob(jb)
  }*/

}
