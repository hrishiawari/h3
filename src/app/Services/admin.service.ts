import { Injectable,Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
  val:EventEmitter<any>
  constructor(private http:Http) {
    this.val=new EventEmitter<any>()
   }
linkhit="http://localhost:7575/devikasweb/";
postAdd(Data){
  const headers =new Headers()
  headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  const body = JSON.stringify(Data);
  return this.http.post(this.linkhit, body, { headers })
  .map(res => res.json())


}

listn(callback:any){
this.val.subscribe(call=>{
  callback(call);
});
}

getRequest(){
  return this.http.get(this.linkhit)
  .map(res => res.json())}

}