import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private _authService: AuthService ) { 
  }
  
  logout() {
	this._authService.logout();
  }

  ngOnInit(): void {
  }


	
}
