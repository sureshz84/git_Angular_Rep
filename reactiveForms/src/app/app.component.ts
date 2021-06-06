import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForms';
  loginForm = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl(''),
  })  
  
  getValue()
  {
    //console.warn(this.loginForm.value);
    const strVal = this.loginForm.value;
    console.warn(this.loginForm.get('password')?.value);
    


  }
  get username()
  {return this.loginForm.get('username')?.value}
}
