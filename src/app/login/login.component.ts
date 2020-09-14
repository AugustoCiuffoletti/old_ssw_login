import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  
  constructor( private _authService: AuthService ) { }

  ngOnInit(): void {
  }

  onLoginEventHandler() {
	const res = this._authService.login(this.login, this.password);
  }
}
