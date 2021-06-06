import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  @Output() parentFunction:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
    
  }
   datas = [
    {
      name : 'Test',
      mail : 'Test@ANIMATION_MODULE_TYPE.com'

    },
    {
      name : 'Test',
      mail : 'Test@ANIMATION_MODULE_TYPE.com'

    },
    {
      name : 'Test',
      mail : 'Test@ANIMATION_MODULE_TYPE.com'

    },
    {
      name : 'Test',
      mail : 'Test@ANIMATION_MODULE_TYPE.com'

    },
    {
      name : 'Test',
      mail : 'Test@ANIMATION_MODULE_TYPE.com'

    },
  ]
  buttonClick()
  {
    
    this.parentFunction.emit(this.datas)
  
  }


}
