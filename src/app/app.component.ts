import { Component, OnInit, Input } from '@angular/core';
import PostData from './posts.json';
import SocialData from './social.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  posts = PostData.posts;
  socialNetworks = SocialData.socialNetworks;
  title = 'uonai';

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // console.log(this.socialNetworks);
  }
}
