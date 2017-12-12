import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Approuter } from '../app.router';
import {FirstServiceService} from '../app/Services/first-service.service'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import{HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import{AdminService} from '../app/Services/admin.service'
// import {LoginlogoutService} from '../app/Services/loginlogout.service'
import{GaurdserService} from '../app/Services/gaurdser.service'

import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewComponent } from './new/new.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginlogoutService } from './Services/loginlogout.service';


@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    AdminComponent,
    EmployeeComponent,
    HeadComponent,
    HomeComponent,
    NavbarComponent,
    NewComponent,
    AboutusComponent,
    

  ],
  imports: [
    BrowserModule,RouterModule,Approuter ,HttpClientModule,HttpModule,FormsModule,ReactiveFormsModule
  ],
  providers: [FirstServiceService,AdminService,GaurdserService,LoginlogoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
