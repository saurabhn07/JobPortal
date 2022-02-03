import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Jobs } from './jobs';

@Injectable({
  providedIn: 'root',
})
export class JobserviceService {
  private url: string = 'http://localhost:8080/JobPortal/jobs';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getJobssFromService(): Observable<Jobs[]> {
    return this.http
      .get<Jobs[]>(this.url + '/allJs')
      .pipe(retry(1), catchError(this.handleError));
  }

  getJobs(jsid: any): Observable<Jobs> {
    return this.http
      .get<Jobs>(this.url + '/getJobs/' + jsid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  createJobs(jobs: any): Observable<Jobs> {
    console.log(jobs);
    return this.http
      .post<Jobs>(
        this.url + '/createJs',
        JSON.stringify(jobs),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateJobs(jobs: any): Observable<Jobs> {
    console.log(jobs);
    return this.http
      .put<Jobs>(
        this.url + '/updateJobs',
        JSON.stringify(jobs),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteJobs(jsid: number): Observable<Jobs> {
    console.log(jsid + ' from deleteJs()');
    return this.http
      .delete<Jobs>(this.url + '/deleteJs/' + jsid, this.httpOptions)
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
