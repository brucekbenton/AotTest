import { Injectable } from '@angular/core';

const names = ["Bob","Carol","Ted","Alice"];

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  Names:string[];

  constructor() { 
    this.Names = names;
  }

  getNames(){
    return(this.Names);
  }
}
