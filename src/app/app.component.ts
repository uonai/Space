import { Component } from '@angular/core';

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
    'subTitle': 'A localized events platform (Technologies: ReactNative, .NET, MongoDB, Azure Cloud)',
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
    'title': 'Hydra',
    'subTitle': 'An IoT cloud platform (Technologies: Angular, .NET, Azure Cloud)',
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
    'subTitle': 'A dashboard for showing real-time fitness gains (Technologies: Angular, .NET, SQL Server, Azure Cloud)',
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
