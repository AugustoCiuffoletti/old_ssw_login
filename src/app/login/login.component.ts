import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  
  constructor( private _authService: AuthService, private _router: Router ) { }

  ngOnInit(): void {
  }

  onLoginEventHandler() {
	if ( this._authService.login(this.login, this.password) ) {
	  this._router.navigate(['main']);
	} else {
	  alert("Wrong credentials");
	}
  }
}
