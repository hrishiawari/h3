import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
usNm:string;
  constructor(
    private acRt:ActivatedRoute
  ) { }

  ngOnInit() {
    this.acRt.params.subscribe(
      params=>this.usNm=params['usNm']
    );
  }

}
