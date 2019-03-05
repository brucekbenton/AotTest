import { Component, OnInit } from '@angular/core';

//import {Service1Service } from '../../../../service1/src/lib/service1.service';
import {Service1Service } from 'service1';

@Component({
  selector: 'lib-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  currentNames:string[];

  constructor(private service:Service1Service) { 
    this.currentNames = this.service.getNames();
  }

  ngOnInit() {
  }

}
