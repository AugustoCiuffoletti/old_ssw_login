import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _router: Router ) { }
  
  private _isLogged = false;

  login(user: string, pass: string): Observable<boolean> {
	console.log("Checking credentials");
    this._isLogged = (user === 'user' && pass === 'secret');
	this._router.navigate(['main']);
    return of(this._isLogged);
  }

  isLogged() {
    return this._isLogged;
  }
  
  logout() {
	this._isLogged = false;
	this._router.navigate(['login']);
  }
  
}
