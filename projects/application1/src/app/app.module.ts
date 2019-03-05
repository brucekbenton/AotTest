import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CompContainerModule } from 'compContainer'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule
    ,CompContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
