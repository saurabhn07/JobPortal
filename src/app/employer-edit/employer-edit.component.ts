import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';
@Component({
  selector: 'app-employer-edit',
  templateUrl: './employer-edit.component.html',
  styleUrls: ['./employer-edit.component.css']
})
export class EmployerEditComponent implements OnInit {
  public employerData: any = {};
  submitted = false;

 //public eid: any ;
  //public selectedId: any;
  onSubmit() {
    this.submitted = true;
    alert('Employer datas are validated successfully!');
  }
  constructor(
    private service: EmpserviceService,
    public router: Router,
    private aroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
   //console.log('from ng oninit' + this.eid);
    //this.service
    //.getEmployer(this.eid)
     // .subscribe((data) => (this.employerData = data));
  }

  updateEmployer() {
    console.log(' Employer Data ----->' + this.employerData);
    this.service
      .updateEmployer(this.employerData)
      .subscribe((data: {}) => this.router.navigate(['/viewemp']));
  }
}
