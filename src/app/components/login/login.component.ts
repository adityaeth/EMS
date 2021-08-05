import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  login: Login[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  verify(){
    
  }

}
