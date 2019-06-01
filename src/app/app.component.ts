import { Component, OnInit, Input } from '@angular/core';
import SocialData from './social.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  socialNetworks = [];
  coordinates = 'Lat/Long: 41.974489, -87.689457';
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.socialNetworks = SocialData.socialNetworks;
  }
}
