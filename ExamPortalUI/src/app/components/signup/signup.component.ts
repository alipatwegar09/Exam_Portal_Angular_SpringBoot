import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { error } from 'console';

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

  constructor(private userService:UserService) { }

  ngOnInit(): void { }

  formSubmit() {
    this.userService.addUser(this.user).subscribe(
      data=>{
console.log(data);
alert('success');
        this.clearForm();
      },
      (error)=>{
        console.log(error);
        alert('something went wrong')
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