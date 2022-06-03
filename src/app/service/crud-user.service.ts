import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {
  readonly api_url = 'http://localhost:8000'
  constructor(private _http: HttpClient) { }

  register(data: any) {
    return this._http.post(`${this.api_url}/v1/auth/register`, data).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  login(data: any) {
    return this._http.post(`${this.api_url}/v1/auth/login`, data).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }

}
