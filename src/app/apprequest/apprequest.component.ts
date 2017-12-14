import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidatorFn, ValidationErrors, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-apprequest',
  templateUrl: './apprequest.component.html',
  styleUrls: ['./apprequest.component.css']
})
export class ApprequestComponent implements OnInit {
  forWhich:string;
  check;
  addtitle;
  obj2
  obj1 = {
    requestFor: this.addtitle,
  }


  constructor(private fbuilder: FormBuilder,
     private route:ActivatedRoute,
 ) { }
  requestApp: FormGroup
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.forWhich = params['forWhich'];
      this.obj1 = {
        requestFor: this.forWhich,

      }
      if(this.forWhich==="Trial"){
        this.check=true;
      }else this.check=false;
   });










    this.requestApp = this.fbuilder.group({
      schoolName: ['', Validators.required],
      address: this.fbuilder.group({
        dist:['',Validators.required],
        cityOrVillage:['',Validators.required],
        Tal:['',Validators.required],
        state:['',Validators.required],
        Location:['',Validators.required]
      }),
      head: ['',Validators.required],
      founder: ['', Validators.required],
      foundation: ['', Validators.required],
      headAdhar: ['', Validators.required],
      headMobile: ['', Validators.required],
      marketingOffId: ['', Validators.required],
      // dist:['',Validators.required]

    })
  }
//   someCustomValidator(contrl:AbstractControl):ValidationErrors | null{
// return contrl.value.length >=6?null:{err:"error"}
//   }
  onSubmit(){
    this.obj2 = this.requestApp.value
    for (var key in this.obj2) {
      this.obj1[key] = this.obj2[key]
    }

    var res = JSON.stringify(this.obj1);
    let d = JSON.parse(res)
    console.log(d)
    this.requestApp.reset()
  }
}
