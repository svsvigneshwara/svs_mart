import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { IProducts } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  public count =0
  public cart=[]
  private _url : string = "/assets/data/available.json ";
  constructor(private http : HttpClient) { }
  public getEmployees() : Observable<IProducts[]>
  {
    return this.http.get<IProducts[]>(this._url);
  }
}
