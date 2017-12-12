import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  araylist1;
  keysArray
  constructor() { }

  ngOnInit() {
    this.araylist1=[{'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}, {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}, {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}] 
    this.keysArray = Object.keys(this.araylist1[0]);
  }

 


}
