import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert : boolean = false;
  registerResto = new FormGroup({
  Name : new FormControl(''),
  Mail_Id : new FormControl(''),
  Password : new FormControl(''),
})
Res_Name ="";
Res_Mail_Id = "";
Res_Password = "";
  constructor(private resto : RestoService) { }

  ngOnInit(): void {
  }
  onsubmit()
  {
    this.Res_Name = this.registerResto.value.Name;
    this.Res_Mail_Id = this.registerResto.value.Mail_Id;
    this.Res_Password = this.registerResto.value.Password;
    if ( this.Res_Name !="" && this.Res_Mail_Id !="" && this.Res_Password !="")
        {
    this.resto.registerUser(this.registerResto.value).subscribe((result)=>{

      
      
        //console.warn(this.addResto.value);
        //this.alert = true;
        //this.registerResto.reset({});
        
      

    })
    
  }
  }
  closeAlert()
  {
    //this.alert = false;
  }

}
