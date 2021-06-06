import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface datatype{
name : string,
id : number,
Laptop : boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { 
    
  }
  getJSONData()
  {
    let url = "https://my-json-server.typicode.com/typicode/demo/db/";
    return this.http.get(url);
  }
  getData(){
    return{
    name : 'Test',
    Id : 1125
  }
}
}
