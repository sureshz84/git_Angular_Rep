import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupTestComponent } from './signup-test/signup-test.component';




@NgModule({
  declarations: [
    LoginComponent,
    SignupTestComponent,
  ],
  imports: [
    CommonModule
  ],
  exports :[
    LoginComponent,
    SignupTestComponent,
    
  ]
})
export class UsersModule { }
