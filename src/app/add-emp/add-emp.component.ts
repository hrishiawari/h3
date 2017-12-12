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
  okk=false;
  GoldData;
  contacttitle;
  contactmsg;
  addtitle;
 
  obj2
   obj1 = {
    addTitle: this.addtitle,
    
}



  constructor( 
    private ser:FirstServiceService,
    private fb: FormBuilder
 
) { 
 
}


  ngOnInit() {


    this.ser.calling(dt => {
      
       this.addtitle=dt.title;

     
     });



    this.myFrm = this.fb.group({
      name: ['', Validators.required],
      // message: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
      )],
      mobile: ['',Validators.compose([Validators.required])],
      adharNo: ['', Validators.required],
      cAddress: ['', Validators.required],
      pAddress: ['', Validators.required],
      bdate: ['', Validators.required],
      qualif: ['', Validators.required],
      exp: ['', Validators.required],
      lastpack: ['', Validators.required],
      projects:['',Validators.required],
      mobilewhatsapp:['',Validators.required],

       
      
      
    });
  
    
  }
  

  onFrmSub() {


 this.obj2=this.myFrm.value
    for (var key in this.obj2) {
      this.obj1[key] =this.obj2[key]
      }

      var res = JSON.stringify(this.obj1);
     let d=JSON.parse(res)
      console.log(d);







    // console.log(this.addtitle)
   console.log(this.myFrm.value)
    window.onscroll = function () { window.scrollTo(0,0); };
    this.okk=true;
    // this.ser.submitFrm(this.myFrm.value).subscribe(
    //   data => {
    //   this.GoldData=data
    //   if(this.GoldData.success==true)
    //   {
    //     this.okk=true;
    //     this.contacttitle=" Thank you for getting in touch!";
    //     this.contactmsg="  One of our colleagues will get back to you shortly.Have a great day!"
        
    //   }
    //   else{
    //     this.okk=true;
    //     this.contacttitle="Something Went Wrong !!!";
    //     this.contactmsg="Please Try Again..."
    //   }
    //   }
    // );
  }

  next(){
    this.okk=false;
    window.onscroll = function () { window.scrollTo(0,window.scrollY); };
  }
}