import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Jobseeker } from './jobseeker';


@Injectable({
  providedIn: 'root',
})
export class JsserviceService {
  private url: string = 'http://localhost:8080/JobPortal/jobseeker';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getJobseekersFromService(): Observable<Jobseeker[]> {
    return this.http
      .get<Jobseeker[]>(this.url + '/allJs')
      .pipe(retry(1), catchError(this.handleError));
  }

  getJobseeker(jsid: number): Observable<Jobseeker> {
    return this.http
      .get<Jobseeker>(this.url + '/getJobseeker/' + jsid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  createJobseeker(jobseeker: any): Observable<Jobseeker> {
    console.log(jobseeker);
    return this.http
      .post<Jobseeker>(
        this.url + '/createJs',
        JSON.stringify(jobseeker),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateJobseeker(jobseeker: any): Observable<Jobseeker> {
    console.log(jobseeker);
    return this.http
      .put<Jobseeker>(
        this.url + '/updateJobseeker',
        JSON.stringify(jobseeker),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteJobseeker(jsid: number): Observable<Jobseeker> {
    console.log(jsid + ' from deleteJs()');
    return this.http
      .delete<Jobseeker>(this.url + '/deleteJs/' + jsid, this.httpOptions)
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
