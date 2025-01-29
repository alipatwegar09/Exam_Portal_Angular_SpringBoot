import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

 constructor(private snack:MatSnackBar,private login:LoginService,private router:Router){}

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
    this.login.generateToken(this.loginData).subscribe((data:any)=>{
      console.log("success")
      console.log(data)

      this.login.loginUser(data.token);

      this.login.getCurrentUser().subscribe((user:any)=>{
        this.login.setUser(user);

        if(this.login.getUserRole()=="ADMIN"){
          this.router.navigate(['/admin'])
        }else if(this.login.getUserRole()=="NORMAL"){
          this.router.navigate(['/user-dashboard'])
        }else{
          this.login.logOut();
          location.reload();
        }
      })
    },(error)=>{
      console.log(error);
      this.snack.open("Something went wrong", '', {
        duration: 3000
      });
    })
  }
}
