import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Jobseeker } from '../jobseeker';
import { JsserviceService } from '../jsservice.service';
@Component({
  selector: 'app-jobseeker-options',
  templateUrl: './jobseeker-options.component.html',
  styleUrls: ['./jobseeker-options.component.css']
})
export class JobseekerOptionsComponent implements OnInit {
  public selectedId: number=0;
 public jsid: number = this.aroute.snapshot.params['jsid'];
  private  id:any;
  
  constructor(public router: Router, private aroute: ActivatedRoute,private eservice: JsserviceService) { }

  ngOnInit(): void {
  }
  
  viewJobs() {
     this.router.navigate(['/viewjobs'])
}

updateProfile() {
  this.router.navigate(['/editjobseeker'])
}

deleteProfile() {
  this.router.navigate(['/viewjobs'])
}

viewProfilee() {
  console.log(this.jsid);
  this.selectedId = this.jsid;
    this.eservice
      .getJobseeker(this.selectedId)
      .subscribe((data: {}) => this.router.navigate(['/viewemp']));
  

}
}
