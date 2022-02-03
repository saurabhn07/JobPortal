import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Employer } from './employer'; 

@Injectable({
  providedIn: 'root',
})
export class EmpserviceService {
  private url: string = 'http://localhost:8080/JobPortal/employer';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getEmployersFromService(): Observable<Employer[]> {
    return this.http
      .get<Employer[]>(this.url + '/allemp')
      .pipe(retry(1), catchError(this.handleError));
  }

  getEmployer(eid: any): Observable<Employer> {
    return this.http
      .get<Employer>(this.url + '/getEmp/' + eid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  createEmployer(employer: any): Observable<Employer> {
    console.log(employer);
    return this.http
      .post<Employer>(
        this.url + '/createEmp',
        JSON.stringify(employer),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateEmployer(employer: any): Observable<Employer> {
    console.log(employer);
    return this.http
      .put<Employer>(
        this.url + '/updateEmp',
        JSON.stringify(employer),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteEmployer(eid: number): Observable<Employer> {
    console.log(eid + ' from deleteEmployer()');
    return this.http
      .delete<Employer>(this.url + '/deleteEmp/' + eid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
