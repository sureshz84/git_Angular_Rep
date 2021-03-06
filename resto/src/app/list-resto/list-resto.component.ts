import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto:RestoService) { }
  collection: any = [];

  ngOnInit(): void {
    this.resto.getList().subscribe((result)=> 
    {
      console.warn(result)
      this.collection=result;
    })
    }
    deleteFun(item: any)
    {
      this.collection.splice(item,1);
      this.resto.deleteFun1(item).subscribe((result)=>{
      console.warn(result)
      this.resto.getList().subscribe((result)=> 
      {
        console.warn(result)
        this.collection=result;
      })
      
    })
    }
}
