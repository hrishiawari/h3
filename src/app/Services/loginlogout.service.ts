import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router'
@Injectable()
export class LoginlogoutService {
  @Output()
  val: EventEmitter<any>


  constructor(private http: Http, private rout: Router) {
    this.val = new EventEmitter<String>();
  }

  login(data) {
    // return this.http.post('/api/authenticate',data)
    // .map((response: Response) => {
    //     let user = response.json();
    //     if (user && user.token) {
    //         localStorage.setItem('currentUser', JSON.stringify(user));
    //         localStorage.setItem('currentUser', '');
    //     }
    // });

    if (data.User == "admin" && data.Pass == "admin") {
      localStorage.setItem('currentUser', data.User)
      this.rout.navigate(['/admin',data.User]);
      console.log(data);
      this.val.emit({
        User: data.user,
        isLogin: 'true'
      })
    } else if (data.User == "head" && data.Pass == "head") {
      
      localStorage.setItem('currentUser', data.User)
      this.rout.navigate(['/head', data.User]);
      console.log(data);
      this.val.emit({
        User: data.user,
        isLogin: 'true'
      })
    } else if (data.User == "employee" && data.Pass == "employee") {
      localStorage.setItem('currentUser', data.User)
      this.rout.navigate(['/employee', data.User]);
      
      console.log(data);
      this.val.emit({
        User: data.user,
        isLogin: 'true'
      })
    }



  }
  logout() {
    localStorage.removeItem('currentUser');
    this.rout.navigate(['/'])

  }
  calling(callback: any) {
    this.val.subscribe(sub => {
      callback(sub);
    });
  }
}
