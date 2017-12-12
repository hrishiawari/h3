import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../Services/first-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  fillFrm=false;
  constructor(
    private ser:FirstServiceService,
    private rout:Router
  ) { }
title="add title"
  ngOnInit() {
  }

  submitFrm(title){
    //this.fillFrm=true;
this.ser.addtitle(title);
document.getElementById("HideDiv").classList.toggle('active')

  }



}
