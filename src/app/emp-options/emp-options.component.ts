import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employer } from '../employer';
import { EmpserviceService } from '../empservice.service';
@Component({
  selector: 'app-emp-options',
  templateUrl: './emp-options.component.html',
  styleUrls: ['./emp-options.component.css']
})
export class EmpOptionsComponent implements OnInit {
  public selectedId: number=0;
  constructor( private eservice: EmpserviceService, public router: Router) { }
  
  ngOnInit(): void {
  }
  
  createJob() {
     this.router.navigate(['/createjobs'])
}

updateJob() {
  this.router.navigate(['/editjobs'])
}

updateProfile() {
  this.router.navigate(['/editemployer'])
}

/*viewProfile(emp: number) {
  this.selectedId = 1;
    this.eservice
      .getEmployer(this.selectedId)
      .subscribe((data: {}) => this.router.navigate(['/viewemp']));
  

}*/


}
