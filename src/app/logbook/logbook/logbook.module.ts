import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {LogBookComponent} from './logbook.component';
import {MarkdownModule} from 'ngx-markdown';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LogBookComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    // LogBookComponent,
    RouterModule.forChild([
      { path: '', component: LogBookComponent}
    ]),
    MarkdownModule.forChild()
  ]
})
export class LogBookModule {

}
