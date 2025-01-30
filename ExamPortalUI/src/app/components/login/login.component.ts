import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

 constructor(private snack:MatSnackBar,private login:LoginService,private router:Router){}

 ngOnInit(){
 }
 
  public loginData = {
    username: '',
    password: ''
  }
  formSubmit() {

    if (!this.loginData.username.trim() || !this.loginData.password.trim()) {
      this.snack.open("field is required", '', {
        duration: 3000
      });
      return;
    }
    this.login.generateToken(this.loginData).subscribe((data:any)=>{
      this.login.loginUser(data.token);
      this.login.getCurrentUser().subscribe((user:any)=>{
        this.login.setUser(user);
        if(this.login.getUserRole()=="ADMIN"){
          this.router.navigate(['admin'])
          this.login.loginSubjectStatus.next(true);
        }else if(this.login.getUserRole()==="Normal"){
          this.router.navigate(['user-dashboard'])
          this.login.loginSubjectStatus.next(true);
        }else{
          this.login.logOut();
          location.reload();
        }
      })
    },(error)=>{
      this.snack.open("Invalid Deatis, Try Again !", '', {
        duration: 3000
      });
    })
  }
}
