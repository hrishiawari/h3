
import { Injectable,Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FirstServiceService {
  val:EventEmitter<any>
  linkhit="http://localhost:7575/devikasweb/"
  constructor(private http:Http) {
    this.val=new EventEmitter<String>();

  }


  addtitle(title){
    // console.log(title)
    this.val.emit({

      title :title

    })
  }

  submitFrm(dtls){


  var data={
    'addTitle':dtls.addTitle,
    'name':dtls.name,
    'emailId':dtls.email,
    'mobile':dtls.mobile,
    'adharNo':dtls.adharNo,
    'permanentAddress':dtls.pAddress,
    'currentAddress':dtls.cAddress,
    'birthDate':dtls.bdate,
    'qualification':dtls.qualif,
    'experience':dtls.exp,
    'lastpackage':dtls.lastpack,
    'projects':dtls.projects,
    'whatsAppNo':dtls.mobilewhatsapp


  }
    // const headers =new Headers()
    // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    // const body = JSON.stringify(data);
console.log(data);

    return this.http.post(this.linkhit +"user/UserRegistration", data )
    .map(res => res.json())
  }




  calling(callback: any) {
    this.val.subscribe(sub => {
      callback(sub);
    });
  }
}