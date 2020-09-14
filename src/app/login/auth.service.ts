import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  private _isLogged = false;

  login(user: string, pass: string) {
	console.log("Checking credentials");
    this._isLogged = true;
	console.log("Credentials accepted");

    return this._isLogged;
  }

  isLogged() {
    return this._isLogged;
  }
  
}
