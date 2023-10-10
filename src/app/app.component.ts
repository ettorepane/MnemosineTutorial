import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Social';
  constructor( private _as: AuthService, private _route: Router ) { }

  isLoggedIn: boolean = false;

  ngOnInit() {
    this.isLoggedIn = this._as.isLoggedIn();
  }

  logout() {
    this._as.logout();
    this._route.navigate(['/login']);
  }

}
