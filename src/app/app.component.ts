import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'uonai';
  posts = [
    {
    'id': 1,
    'title': 'Uppakoma',
    'date': '2018 - present',
    'state': 'In Development',
    'subTitle': 'A localized events platform (Technologies: ReactNative, .NET, MongoDB, Azure Cloud)',
    'postDetails': 'PostDetails',
    'link': 'https://www.patreon.com/posts/introducing-u-25466849',
    'technologies': [
      {
        id: 1,
        technology: 'ReactNative'
      },
      {
        id: 2,
        technology: '.NET'
      },
      {
        id: 3,
        technology: 'MongoDB'
      },
    ]
  },
  {
    'id': 2,
    'title': 'Ecolab3D',
    'date': '2018 - present',
    'state': 'Beta',
    'subTitle': 'An IoT cloud platform (Technologies: Angular, .NET, Azure Cloud)',
    'postDetails': 'Collects data from remote sensors, automation tools and other systems by leveraging Microsoft’s secure Azure cloud platform.',
    'link': 'https://newsroom.accenture.com/news/nalco-champion-teams-with-accenture-and-microsoft-to-launch-digital-platform-for-downstream-oil-and-gas-customers.htm',
    'technologies': [
      {
        id: 1,
        technology: 'ReactNative'
      },
      {
        id: 2,
        technology: '.NET'
      },
      {
        id: 3,
        technology: 'MongoDB'
      },
    ]
  },
  {
    'id': 3,
    'title': 'Vitae',
    'date': '2019 - present',
    'state': 'In Development',
    'subTitle': 'A dashboard for showing real-time fitness gains (Technologies: Angular, .NET, SQL Server, Azure Cloud)',
    'postDetails': 'PostDetails',
    'link': '',
    'technologies': [
      {
        id: 1,
        technology: 'ReactNative'
      },
      {
        id: 2,
        technology: '.NET'
      },
      {
        id: 3,
        technology: 'MongoDB'
      },
    ]
  }



];

}
