import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BASEURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }

  public getCurrentUser(){
    return this.http.get(`${BASEURL}/current-user`)
  }
  public generateToken(loginData:any){
    return this.http.post(`${BASEURL}/generate-token`,loginData)
  }
  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;
  }
  public isLoggedIn() {
    if (typeof window !== 'undefined' && window.localStorage) {
      let tokenStr = localStorage.getItem("token");
      return !(tokenStr == undefined || tokenStr == '' || tokenStr == null);
    }
    return false;
  }

  public logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
  public getToken(){
    return localStorage.getItem('token')
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user))
  }

  public getUser() {
     let userStr= localStorage.getItem('user');

     if(userStr!=null){
      return JSON.parse(userStr);
     }
     else{
      this.logOut();
      return null;
     }
  }

  public getUserRole(){
    let user=this.getUser();

    return user.authorities[0].authority;
  }
}
