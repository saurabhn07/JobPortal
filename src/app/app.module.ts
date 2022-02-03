import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployerCreateComponent } from './employer-create/employer-create.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployerEditComponent } from './employer-edit/employer-edit.component';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { JobseekerCreateComponent } from './jobseeker-create/jobseeker-create.component';
import { JobseekerListComponent } from './jobseeker-list/jobseeker-list.component';
import { JobseekerEditComponent } from './jobseeker-edit/jobseeker-edit.component';
import { JobsCreateComponent } from './jobs-create/jobs-create.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsEditComponent } from './jobs-edit/jobs-edit.component';
import { LoginComponent } from './login/login.component';
import { JobseekerViewComponent } from './jobseeker-view/jobseeker-view.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { RegisterComponent } from './register/register.component';
import { LoginnComponent } from './loginn/loginn.component';
import { EmpOptionsComponent } from './emp-options/emp-options.component';
import { JobseekerOptionsComponent } from './jobseeker-options/jobseeker-options.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployerCreateComponent,
    EmployerEditComponent,
    EmployerListComponent,
    JobseekerCreateComponent,
    JobseekerListComponent,
    JobseekerEditComponent,
    JobsCreateComponent,
    JobsListComponent,
    JobsEditComponent,
    LoginComponent,
    JobseekerViewComponent,
    EmployerLoginComponent,
    RegisterComponent,
    LoginnComponent,
    EmpOptionsComponent,
    JobseekerOptionsComponent,
    AboutusComponent,
    ContactusComponent,
    JobApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
