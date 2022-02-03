import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployerCreateComponent } from './employer-create/employer-create.component';
import { EmployerEditComponent } from './employer-edit/employer-edit.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { JobseekerCreateComponent } from './jobseeker-create/jobseeker-create.component';
import { JobseekerListComponent } from './jobseeker-list/jobseeker-list.component';
import { JobseekerEditComponent } from './jobseeker-edit/jobseeker-edit.component';
import { JobsCreateComponent } from './jobs-create/jobs-create.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsEditComponent } from './jobs-edit/jobs-edit.component';
import { LoginComponent } from './login/login.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { RegisterComponent } from './register/register.component';
import { LoginnComponent } from './loginn/loginn.component';
import { EmpOptionsComponent } from './emp-options/emp-options.component';
import { JobseekerOptionsComponent } from './jobseeker-options/jobseeker-options.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
 { path: 'createemployer', component: EmployerCreateComponent },
 { path: 'editemployer', component: EmployerEditComponent },
 { path: 'viewemployer', component: EmployerListComponent },
 { path: 'createjs', component: JobseekerCreateComponent },
 { path: 'viewjs', component: JobseekerListComponent },
 { path: 'editjobseeker', component: JobseekerEditComponent },
 { path: 'createjobs', component: JobsCreateComponent },
 { path: 'viewjobs', component: JobsListComponent },
 { path: 'editjobs', component: JobsEditComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'emplogin', component: EmployerLoginComponent },
 { path: 'loginn', component: LoginnComponent },
 { path: 'emplogin', component: EmployerLoginComponent },
 { path: 'empoptions', component: EmpOptionsComponent },
 { path: 'jsoptions', component: JobseekerOptionsComponent },
 { path: 'aboutus', component: AboutusComponent },
 { path: 'contactus', component: ContactusComponent },
 { path: 'jobapply', component: JobApplyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
