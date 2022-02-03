import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Jobseeker } from './jobseeker';
import { Login } from './login';


@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  private url: string = 'http://localhost:8080/JobPortal/jobseeker';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  
  getJobseeker(username:any): Observable<Login> {
    return this.http
      .get<Jobseeker>(this.url + '/getJobseeker/' + username , this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  
  getJobseekersFromService(): Observable<Login[]> {
    return this.http
      .get<Jobseeker[]>(this.url + '/allJs')
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
