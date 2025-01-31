import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: ''
  }

  constructor(private userService:UserService, private _snack:MatSnackBar) { }

  ngOnInit(): void { }

  formSubmit() {
    // if(this.user.username===''){
    //   this._snack.open("Username is required!",'',{
    //     duration:3000 }
    //   );
    //   return;
    // }
    if (!this.user.username.trim() ||
      !this.user.password.trim() ||
      !this.user.firstName.trim() ||
      !this.user.lastName.trim() ||
      !this.user.email.trim() ||
      !this.user.phoneNo) {

      this._snack.open("All fields are required!", '', {
        duration: 3000
      });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        this.user.firstName = '';
        this.user.lastName = '';
        this.user.email = '';
        this.user.username = '';
        this.user.password = '';
        this.user.phoneNo = '';
        this._snack.open("User Created Successfully", '', {
          duration: 3000
        });
      },
      (error)=>{
        console.log(error);
        this._snack.open('Username is already Exist,please try another Username!', '', {
          duration: 3000
        });
      }
    )
  }
  clearForm() {
    this.user = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: ''
    };
  }

}