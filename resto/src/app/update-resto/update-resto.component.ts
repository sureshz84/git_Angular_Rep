import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RestoService } from '../resto.service'
import { ActivatedRoute } from '@angular/router'
import { collectExternalReferences } from '@angular/compiler';


@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editResto = new FormGroup({
    Name: new FormControl(''),
    id: new FormControl(''),
    owner: new FormControl(''),
  })
  Res_Name = "";
  Res_Owner = "";
  Res_id = "";
  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {

    if (this.router.snapshot.params.id != "") { 
    this.resto.getCurrentRestoService(this.router.snapshot.params.id).subscribe((result) => {
      console.warn("Result", result);
      this.editResto = new FormGroup({
        Name: new FormControl(result['Name']),
        id: new FormControl(result['id']),
        owner: new FormControl(result['owner']),
      })
    })
  }
  else{
    this.editResto = new FormGroup({
      Name: new FormControl(''),
      id: new FormControl(''),
      owner: new FormControl(''),
    })
  }
}
collection()
{
  console.warn("Save",this.router.snapshot.params.id);
  if (!this.router.snapshot.params.id) { 
 // console.warn("Result", this.editResto.value);
  this.resto.updateResto(this.router.snapshot.params.id, this.editResto.value).subscribe((result) => {
    console.warn("Result", this.router.snapshot.params.id);
  })

}else{
  
  this.resto.savaREsto(this.editResto.value).subscribe((result)=>{

      
        
    //console.warn(this.addResto.value);
    //this.alert = true;
    this.editResto.reset({});
    
  

})
}
}

}
