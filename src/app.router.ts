import {RouterModule ,Routes} from '@angular/router'
import { NavbarComponent } from './app/navbar/navbar.component';
import { AboutusComponent } from './app/aboutus/aboutus.component';
import { HomeComponent } from './app/home/home.component';
import { NewComponent } from './app/new/new.component';
import { HeadComponent } from './app/head/head.component';
import { EmployeeComponent } from './app/employee/employee.component';
import { AdminComponent } from './app/admin/admin.component';
import{GaurdserService} from '../src/app/Services/gaurdser.service'

 const routes:Routes=[
    {path:'',component:HomeComponent },   
    {path:'aboutus',component:AboutusComponent }, 
    {path:'new',component:NewComponent },
    {path:'admin/:usNm',component:AdminComponent,canActivate:[GaurdserService] }, 
    // {path:'admin',redirectTo:'admin/ani',pathMatch:'full'},
    {path:'employee/:usNm',component:EmployeeComponent }, 
    {path:'head/:usNm',component:HeadComponent },    
    
    
  
    
];
export const Approuter=RouterModule.forRoot(routes)