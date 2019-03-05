import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CompContainerComponent } from './comp-container.component';
import { Component1Component } from './component1/component1.component';

import { Service1Module } from 'service1';

@NgModule({
  imports: [
    CommonModule
    ,FormsModule
    ,Service1Module
  ],
  declarations: [CompContainerComponent, Component1Component],
  exports: [Component1Component]
})
export class CompContainerModule { }
