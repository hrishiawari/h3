
import { Injectable,Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FirstServiceService {
  val:EventEmitter<any>
  
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
    'name':dtls.name,
    'email':dtls.name,
    'mobile':dtls.name,
    'adharNo':dtls.name,
    'pAddress':dtls.name,
    'cAddress':dtls.name,
    'bdate':dtls.name,
    'qualif':dtls.name,
    'exp':dtls.name,
    'lastpack':dtls.name,
    'projects':dtls.name,
    'mobilewhatsapp':dtls.name
  }
    const headers =new Headers()
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const body = JSON.stringify(data);
    console.log(data)
    return this.http.post('http://localhost:4200/post', body, { headers })
    .map(res => res.json())

  }




  calling(callback: any) {
    this.val.subscribe(sub => {
      callback(sub);
    });
  }
}