import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgForm } from '@angular/forms';
import{AdminService} from '../Services/admin.service'
import { ActivatedRoute } from '@angular/router';
import{req}from'./req'
import { Http } from '@angular/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
Add:FormGroup;
ImgUrl: any;
data:any;
post;
usNm:string;
request=[
  new req('Jagtap','Shaurya',1),
  new req('Bharat','Ganesh',2),
  new req('Patil','Rudra',3)
]

  constructor(
    private FBuild:FormBuilder,
    private adser:AdminService,
  private acRt:ActivatedRoute,
  private http:Http
  ) { }

  ngOnInit() {










      this.acRt.params.subscribe(
        params=>this.usNm=params['usNm']
      );


// this.adser.getRequest().subscribe(
//   getData=>{
//     this.data=getData
//   }
// )



    this.Add=this.FBuild.group({
      title:['',Validators.required],
      description:['',Validators.required],
      adminId:['',Validators.required]
    })
  }
  submitAdd(){
    var dtl=this.Add.value
    this.adser.postAdd(dtl).subscribe(res=>{
      this.data=res.msg;
    })
  }
  choosePhoto() {
    document.getElementById('my_file').click();
  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.ImgUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0].name);
    }
  }


  view(){
    document.getElementById("HideDiv").classList.toggle('active')

  }

}