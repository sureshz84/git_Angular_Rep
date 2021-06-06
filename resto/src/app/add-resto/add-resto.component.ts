import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
    alert : boolean = false;
    addResto = new FormGroup({
    Name : new FormControl(''),
    id : new FormControl(''),
    owner : new FormControl(''),
  })
  Res_Name ="";
  Res_Owner = "";
  Res_id = "";
  constructor(private resto : RestoService) { }

  ngOnInit(): void {
  }
  onsubmit()
  {
    this.Res_Name = this.addResto.value.Name;
    this.Res_Owner = this.addResto.value.owner;
    this.Res_id = this.addResto.value.id;
    if ( this.Res_Name !="" && this.Res_Owner !="" && this.Res_id !="")
        {
    this.resto.savaREsto(this.addResto.value).subscribe((result)=>{

      
        
        //console.warn(this.addResto.value);
        this.alert = true;
        this.addResto.reset({});
        
      

    })
  }
  }
  closeAlert()
  {
    this.alert = false;
  }

}
