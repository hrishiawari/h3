import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
Adminlist:string[]=[];

  constructor(
    private FBuild:FormBuilder,
    private acRt:ActivatedRoute,
    private adser:AdminService
  ) { }

  ngOnInit() {
    this.adser.GetAdmin().subscribe(adminlist=>
    {this.Adminlist=adminlist.result
    console.log(this.Adminlist)}
    )

    this.acRt.params.subscribe(
      params=>this.usNm=params['usNm']
    );
    // this.adser.getUserdata().subscribe(Admins=>{
    //   Admins.json()
    // })

    this.AdAdmin=this.FBuild.group({
      name:['',Validators.required],
      category:['',Validators.required],
      adminId:['',Validators.required],
      password:['',Validators.required]
    })


  }
p;
  adAdmin(){
    this.adser.AddAdmin(this.AdAdmin.value).subscribe(res=>
    {
     this.p=res.msg    })
  }


  goToAdminPanel(adminid){
    this.adser.headToadmin(adminid)
  }

  araylist1=[{'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}, {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}, {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}]
  keysArray = Object.keys(this.araylist1[0]);

}
