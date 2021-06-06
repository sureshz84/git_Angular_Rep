import { Component } from '@angular/core';
import {UsersService} from './users.service';
import {datatype} from './admin/admin.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  strCheck = "";
  data:any = []
  constructor (private user:UsersService)
  {
    
    console.warn(this.user.getData())
    this.strCheck = this.user.getData().name;

    this.user.getJSONData().subscribe(data=> {console.warn(data)
    this.data = data
    })

    


    
  }
  getdatas() {
  const interData : datatype = {
    name: "Test",
    id : 10,
    Laptop : true

  }
    return interData;
  }
}
