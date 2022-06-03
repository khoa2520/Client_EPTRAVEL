import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TinTuc } from '../interface/tintuc';

@Injectable({
  providedIn: 'root'
})
export class TintucService {

  url:string='../assets/data/tintuc.json';

  constructor(private _http:HttpClient) { }

  getDataTinTuc():Observable<TinTuc[]>{
    return this._http.get<TinTuc[]>(this.url)
  }
}
