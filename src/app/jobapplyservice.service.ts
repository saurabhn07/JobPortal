import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { jobApply } from './jobApply';


@Injectable({
  providedIn: 'root',
})
export class jobapplyserviceService {
  private url: string = 'http://localhost:8080/JobPortal/jobapply';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  applyJob(jobApply: any): Observable<jobApply> {
    console.log(jobApply);
    return this.http
      .post<jobApply>(
        this.url + '/addjobseeker',
        JSON.stringify(jobApply),
        this.httpOptions
      )
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
