import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private _as: AuthService ) { }

  username = '';
  password = '';

  OnSubmit(){
    this._as.login(this.username, this.password);
  }
}
