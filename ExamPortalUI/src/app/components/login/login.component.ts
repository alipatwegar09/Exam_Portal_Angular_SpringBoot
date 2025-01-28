import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

 constructor(private snack:MatSnackBar,private login:LoginService){}

 ngOnInit(){}
  public loginData = {
    username: '',
    password: ''
  }
  formSubmit() {

    if (this.loginData.username.trim() == '' || this.loginData.username==null) {
      this.snack.open("field is required");
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password==null) {
      this.snack.open("field is required");
      return;
    }
    this.login.generateToken(this.loginData).subscribe(data=>{
      console.log("success")
      console.log(data)
    },(error)=>{
      console.log(error);
    })
  }
}
