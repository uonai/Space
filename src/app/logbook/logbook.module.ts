import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', loadChildren: './logbook-view/logbook-view.module#LogBookViewModule'},
      {path: 'logs', loadChildren: './log/log.module#LogModule'}
    ]),
    MarkdownModule.forRoot()
  ]
})
export class LogBookModule {

}
