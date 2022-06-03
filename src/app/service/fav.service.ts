import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  base_url: string = "http://localhost:8000"

  createFav(data: any) {
    return this._http.post(`${this.base_url}/fav`, data).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  checkFav(data: any) {
    return this._http.post(`${this.base_url}/fav/check/checkUser`, data).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getTourInFav(data: any) {
    return this._http.post(`${this.base_url}/fav/getTourInFav`, data).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  updateFav(data: any) {
    return this._http.patch(`${this.base_url}/fav/updateFav`, data);
  }
  getFavUser(user: string) {
    return this._http.get(`${this.base_url}/fav/${user}`)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }
  getAllTourInFav(data: any) {
    return this._http.post(`${this.base_url}/fav/getAllTourInFav`, data)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }

  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message)
    )
  }

  constructor(private _http: HttpClient) { }
}
