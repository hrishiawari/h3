import { Injectable,Output,EventEmitter } from '@angular/core';
import { Http, Headers, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class EmpService {

  val:EventEmitter<any>
  constructor(private http:Http) {
    this.val=new EventEmitter<any>()
   }

   linkhit="http://localhost:7575/devikasweb";
   submitTask(data){

    return this.http.post(this.linkhit,data).map(res=>res.json())
   }

}
