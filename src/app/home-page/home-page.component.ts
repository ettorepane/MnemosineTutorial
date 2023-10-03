import { Component, OnInit } from '@angular/core';

import PocketBase from 'pocketbase';

const pb = new PocketBase('https://sobreweb.pockethost.io');

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  posts: any = [];


  async ngOnInit() {
    // you can also fetch all records at once via getFullList
    const records = await pb.collection("Post").getList(1, 30, { sort: '-created', expand: "owner, likes",  })

    this.posts = records.items;

    console.log(records)
  }

}
