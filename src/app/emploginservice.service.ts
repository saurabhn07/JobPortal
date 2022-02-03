import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Jobseeker } from './jobseeker';
import { Employer } from './employer';
import { Emplogin } from './emplogin';

@Injectable({
  providedIn: 'root',
})
export class EmploginserviceService {
  private url: string = 'http://localhost:8080/JobPortal/employer';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  
  getEmployer(username:any): Observable<Emplogin> {
    return this.http
    .get<Employer>(this.url + '/getEmp/' + username , this.httpOptions)
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
