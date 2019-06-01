import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', loadChildren: () => import('./logbook/logbook.module').then(m => m.LogBookModule)},
      {path: 'post', loadChildren: () => import('./log/log.module').then(m => m.LogModule)},
    ]),
    MarkdownModule.forRoot()
  ]
})
export class LogBookMainModule {

}




