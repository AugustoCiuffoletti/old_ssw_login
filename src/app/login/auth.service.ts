import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _router: Router ) { }
  
  private _isLogged = false;

  login(user: string, pass: string) {
	console.log("Checking credentials");
    this._isLogged = true;
	console.log("Credentials accepted");
	this._router.navigate(['main']);
    return this._isLogged;
  }

  isLogged() {
    return this._isLogged;
  }
  
  logout() {
	this._isLogged = false;
	this._router.navigate(['login']);
  }
  
}
