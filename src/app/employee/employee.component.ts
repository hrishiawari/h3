import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { EmpService } from '../Services/emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
usNm:string;
statusFrm:FormGroup;
post;
  constructor(
    private fb:FormBuilder,
    private acRt:ActivatedRoute,
    private empser:EmpService
  ) { }

  ngOnInit() {
    this.statusFrm=this.fb.group({
      taskTitle:['',Validators.required],
      taskDisc:['',Validators.required]
    })

    this.acRt.params.subscribe(
      params=>this.usNm=params['usNm']
    );
  }
  submitTask(){

    this.empser.submitTask(this.statusFrm.value).subscribe()
    this.statusFrm.reset;
  }
  chechforMsg(){

    this.post=!this.post;
  }


// add_fields() {
//     var d = document.getElementById("content");

//     d.innerHTML += `<br /><span>Q: <input type='text'style='width:200px;'value='' />
//     <small></small></span> X <span>Ans: <input type='text' style='width:48px'  value='' />
//     <small>(ft)</small</span>`;
//  }

}
