import { Component, OnInit, Input } from '@angular/core';
import PostData from './posts.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  posts = [];
  title = 'uonai';

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.posts = PostData.posts;
  }
}
