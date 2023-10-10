import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _route : Router 
  ) { }


  async login(username: string, password: string) {
    const pb = new PocketBase("https://sobreweb.pockethost.io/");
    const authData = await pb.collection('users').authWithPassword(username, password).then((record: any) => {
      //SUCCESS
      console.log('SUCCESS', record);
      this._route.navigate(['/home']);
    }).catch((error: any) => {
      console.log('ERROR', error);
    });
  }

  async logout() {
    const pb = new PocketBase("https://sobreweb.pockethost.io/");
    pb.authStore.clear();
  }

  getUserInfo() {
    const pb = new PocketBase("https://sobreweb.pockethost.io/");
    return pb.authStore.model;
  }

  isLoggedIn() {
    const pb = new PocketBase("https://sobreweb.pockethost.io/");
    if (pb.authStore.model) {
      return true;
    } else {
      return false;
    }
  }

}
