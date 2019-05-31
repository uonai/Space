import { Component, OnInit, Input } from '@angular/core';
import PostData from './posts.json';
import SocialData from './social.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  posts = [];
  socialNetworks = [];
  title = 'uonai';
  coordinates = 'Lat/Long: 41.974489, -87.689457';

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.posts = PostData.posts;
    this.socialNetworks = SocialData.socialNetworks;
  }
}
