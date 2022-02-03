import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employer } from '../employer';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css'],
})
export class EmployerListComponent implements OnInit {
  public employers = [] as any;
  constructor(private eservice: EmpserviceService, private router: Router) {}
  public selectedId: number = 0;
  ngOnInit(): void {
    this.eservice
      .getEmployersFromService()
      .subscribe((data) => (this.employers = data));
  }

  onDelete(emp: Employer) {
    this.selectedId = emp.eid;
    if (window.confirm('Are you sure , you want to delete?')) {
      this.eservice
        .deleteEmployer(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/viewemp']));
    }
  }
}
