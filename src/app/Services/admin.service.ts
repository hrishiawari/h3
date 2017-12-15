import { Injectable,Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class AdminService {
  val:EventEmitter<any>
  constructor(private http:Http) {
    this.val=new EventEmitter<any>()
   }
linkhit="http://localhost:7575/devikasweb";




postAdd(Data){
  // const body = JSON.stringify(Data);
  return this.http.post(this.linkhit +"/advertise/saveAdvertise", Data)
  .map(res => res.json())
}

listn(callback:any){
this.val.subscribe(call=>{
  callback(call);
});
}
// getUserdata(){
//   return this.http.get(this.linkhit).map(fetch=>fetch.json())
// }
AddAdmin(adminData){
return this.http.post(this.linkhit +"/admin/saveAdmin",adminData).map(getres=>getres.json())
}
GetAdmin(){
return this.http.get(this.linkhit +'/admin/getAllAdmins').map(getres=>getres.json())
}

headToadmin(adminId){
this.val.emit({
  id:adminId,
  head:"head"
})

}
// getRequest(){
//   return this.http.get(this.linkhit)
//   .map(res => res.json())}

}