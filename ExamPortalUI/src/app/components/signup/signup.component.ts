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
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  constructor(private userService:UserService, private _snack:MatSnackBar) { }

  ngOnInit(): void { }

  formSubmit() {
    if(this.user.userName===''){
      this._snack.open("Username is required!",'',{
        duration:3000 }
      );
      return;
    }
    this.userService.addUser(this.user).subscribe(
      data=>{
console.log(data);
alert('success');
        this.clearForm();
        this._snack.open("User Created Successfully", '', {
          duration: 3000
        });
      },
      (error)=>{
        console.log(error);
        this._snack.open('something went wrong', '', {
          duration: 3000
        });
      }
    )
  }
  clearForm() {
    this.user = {
      userName: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
  }

}