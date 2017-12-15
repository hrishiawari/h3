import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../Services/first-service.service';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginlogoutService } from '../Services/loginlogout.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  myFrm: FormGroup;

  fillFrm=false;
  isLogin=false;
  User;
  Adds:string[]=[]
  constructor(
    private Login:LoginlogoutService,
    private ser:FirstServiceService,
    private rout:Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.Login.calling(dt => {

       this.isLogin=dt.isLogin;
       this.User=dt.User;

     });


     this.ser.getAllads().subscribe(res=>{
    this.Adds=res.result;
     })


     this.myFrm = this.fb.group({
      User: ['',Validators.required],
      Pass: ['',Validators.required],
    });

  }

  submitFrm(adminId,title){
    //this.fillFrm=true;
this.ser.addtitle(adminId,title);
document.getElementById("HideDiv").classList.toggle('active')

  }
  onLogin(){
    var info=(this.myFrm.value)
    this.Login.login(info);

  }
  logout(){
    this.Login.logout();
    this.isLogin=false;
      }

}
