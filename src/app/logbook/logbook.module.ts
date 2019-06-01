import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', loadChildren: './logbook/logbook.module#LogBookModule'},
      {path: 'post', loadChildren: './log/log.module#LogModule'},
    ]),
    MarkdownModule.forRoot()
  ]
})
export class LogBookMainModule {

}




