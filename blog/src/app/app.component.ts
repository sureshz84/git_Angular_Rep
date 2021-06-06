import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}


interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }
  
  title = 'blog Test';
  name = 'Test';
  test()
  {
    return this.name
  }
obj={
name : 'Test1',
Companyname : 'Test 2'
}
//myName = "Testing"
getName(_myName: any){
alert("Test");
//alert(myName);
}
currentVal:string = "";
color1:string = "yellow"; 
disable_Box:boolean= true 
getprop(evt: string){
  console.warn(evt)
  this.currentVal = evt;
  this.disable_Box = false
}





Test = "Disp Text"
show:String= "no" 
dataArray=[
  {
    name:'Kovil',
    ID:15
  },
  {
    name:'Svg',
    ID:15
  },
  {
    name:'Madurai',
    ID:15
  },
  {
    name:'Dubai',
    ID:15
  },
  {
    name:'America',
    ID:15
  },
  ]

  dataArray1=[
    {
        ID:15
    },
    {
      ID:76
    },
    {
      ID:81
    },
    {
      ID:85
    },
    {
      ID:90
    },
    ]

  getVal(_value: any)
  {
    console.warn(_value)
  }
  err = false;
  colorTest = "true"
  CheckColor()
  {
    this.err = !this.err;
  }

  alerts: Alert[] = [];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
  

parentFunction(parFun: any)
{
  console.warn(parFun);
  
}
}
