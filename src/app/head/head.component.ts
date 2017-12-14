import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {adminlist} from './adminlist'
import { AdminService } from '../Services/admin.service';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  AdAdmin:FormGroup;
  usNm:string;
  ad;

  constructor(
    private FBuild:FormBuilder,
    private acRt:ActivatedRoute,
    private adser:AdminService
  ) { }



  adlist=[
    new adminlist('Admin1','android',5),
    new adminlist('Admin2','web',1),
    new adminlist('Admin3','software',9)
  ]



  ngOnInit() {

    this.acRt.params.subscribe(
      params=>this.usNm=params['usNm']
    );
    this.adser.getUserdata().subscribe(Admins=>{
      Admins.json()
    })

    this.AdAdmin=this.FBuild.group({
      name:['',Validators.required],
      category:['',Validators.required]
    })


  }
p;
  adAdmin(){
    this.adser.AddAdmin(this.AdAdmin.value).subscribe(res=>
    {
     this.p=res.msg    })
  }



  araylist1=[{'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}, {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}, {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}]
  keysArray = Object.keys(this.araylist1[0]);

}
