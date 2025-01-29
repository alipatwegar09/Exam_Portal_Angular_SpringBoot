import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(public login:LoginService,private router:Router){}
  ngOnInit(): void {
      
  }

  logOut(){
    this.login.logOut();
    window.location.reload()
  }
}
