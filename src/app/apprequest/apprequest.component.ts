import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidatorFn, ValidationErrors, FormGroup, AbstractControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-apprequest',
  templateUrl: './apprequest.component.html',
  styleUrls: ['./apprequest.component.css']
})
export class ApprequestComponent implements OnInit {

  constructor(private fbuilder: FormBuilder) { }
  requestApp: FormGroup
  ngOnInit() {

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

    console.log(this.requestApp.value)
    this.requestApp.reset()
  }
}
