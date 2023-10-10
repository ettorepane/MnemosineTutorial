import { Component, OnInit } from '@angular/core';

import PocketBase from 'pocketbase';

import { AuthService } from '../auth.service';

const pb = new PocketBase('https://sobreweb.pockethost.io');

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private _as: AuthService ) { }

  posts: any = [];

  isLoggedIn: boolean = false;

  testoDaPub: string = '';

  infoUtente: any = this._as.getUserInfo();

  primoNome: string = this.infoUtente?.name.split(' ')[0];

  async ngOnInit() {
    // you can also fetch all records at once via getFullList
    const records = await pb.collection("Post").getList(1, 30, { sort: '-created', expand: "owner, likes",  })

    this.posts = records.items;

    this.isLoggedIn = this._as.isLoggedIn();

    this.updateRecursive();

  }

  updateRecursive() {
    setTimeout(() => {
      this.ngOnInit();
      console.log('updated');
    }, 3000);
  }

  OnSubmit() {
    const data = {
      Contenuto: this.testoDaPub,
      owner: this._as.getUserInfo()?.id
    };
    const pb = new PocketBase("https://sobreweb.pockethost.io/");
    pb.collection('Post').create(data).then((record: any) => {
      //SUCCESS
      console.log('SUCCESS', record);
      this.ngOnInit();
    }).catch((error: any) => {
      console.log('ERROR', error);
    });
  }

}
