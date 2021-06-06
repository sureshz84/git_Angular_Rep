import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/restaurants";
  rootUrl="http://localhost:3000/";
  constructor(private http:HttpClient) { }
  getList(){
    console.warn("Import Some Data");
    return this.http.get(this.url);
  }
  savaREsto(data: any)
  {
    console.warn("Service",data)
    return this.http.post(this.url,data);
  }
  deleteFun1(id: any)
  {
    return this.http.delete(`${this.url}/${id}`);

  }
  getCurrentRestoService(id: any)
  {
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id: any, data: any)
  {
    return this.http.put(`${this.url}/${id}`, data);
  }
  registerUser(data: any)
  {
    console.warn("result",data);
    return this.http.post(this.rootUrl+"users",data);
  }
}
