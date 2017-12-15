import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginlogoutService } from '../Services/loginlogout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myFrm: FormGroup;
Data;

//  usr=false;
  constructor(private rout:Router,
    private fb: FormBuilder,
) { }

  ngOnInit() {




  }




}
