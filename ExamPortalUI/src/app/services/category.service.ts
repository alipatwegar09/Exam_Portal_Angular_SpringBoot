import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BASEURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public categories(){
    return this.http.get(`${BASEURL}/category/`)
  }

  public addCategory(category:any){
    return this.http.post(`${BASEURL}/category`,category)
  }
}
