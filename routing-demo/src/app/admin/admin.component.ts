import { Component, OnInit } from '@angular/core';


export interface datatype{
  name : string,
  id : number,
  Laptop : boolean
  }
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
