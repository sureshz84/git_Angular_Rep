import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsSample';
onLoad={
  email : "sure@test.com"
}
  onSubmit(data: any)
  {
    console.warn(data)
  }
}
