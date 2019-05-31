import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {LogBookComponent} from './logbook.component';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  declarations: [LogBookComponent],
  imports: [
    CommonModule,
    // LogBookComponent,
    RouterModule.forChild([
      { path: '', component: LogBookComponent}
    ]),
    MarkdownModule.forChild()
  ]
})
export class LogBookModule {

}
