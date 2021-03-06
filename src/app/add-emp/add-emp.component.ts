import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FirstServiceService } from '../Services/first-service.service';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  myFrm: FormGroup;
  okk = false;
  GoldData;
  contacttitle;
  contactmsg;
  addtitle;
  adminId;
  obj2;
  obj1 = {
    adminId:this.adminId,
    addTitle: this.addtitle,

  }



  constructor(
    private ser: FirstServiceService,
    private fb: FormBuilder

  ) {

  }


  ngOnInit() {


    this.ser.calling(dt => {

      this.addtitle = dt.title;
      this.adminId=dt.adminId;
      this.obj1 = {
        adminId:this.adminId,
        addTitle: this.addtitle,

      }

    });



    this.myFrm = this.fb.group({
      name: ['', Validators.required],
      // message: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')]
      )],
      mobile: ['', Validators.compose([Validators.required])],
      adharNo: ['', Validators.required],
      cAddress: ['', Validators.required],
      pAddress: ['', Validators.required],
      bdate: ['', Validators.required],
      qualif: ['', Validators.required],
      exp: ['',Validators.required],
      lastpack: [''],
      projects: [''],
      mobilewhatsapp: ['', Validators.required],




    });


  }


  onFrmSub() {


    this.obj2 = this.myFrm.value
    for (var key in this.obj2) {
      this.obj1[key] = this.obj2[key]
    }

    var res = JSON.stringify(this.obj1);
    let d = JSON.parse(res)
    console.log(d);







    window.onscroll = function () { window.scrollTo(0, 0); };
    this.okk = true;


    this.ser.submitFrm(d).subscribe(
      data => {
        this.GoldData = data
        // console.log(this.GoldData);

        if (this.GoldData.status === "success") {

          this.contacttitle = ' Thank you !';
          this.contactmsg = this.GoldData.msg;

        }
        else {

          this.contacttitle = 'Something Went Wrong !!!';
          this.contactmsg = 'Please Try Again...'
        }
      },
      err=>{
        return err
      }
    );
    this.myFrm.reset();
  }

  next() {
    this.okk = false;
    window.onscroll = function () { window.scrollTo(0, window.scrollY); };
  }
}