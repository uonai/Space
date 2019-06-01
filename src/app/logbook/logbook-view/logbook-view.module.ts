import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {LogBookViewComponent} from './logbook-view.component';
import {MarkdownModule} from 'ngx-markdown';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LogBookViewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    // LogBookComponent,
    RouterModule.forChild([
      { path: '', component: LogBookViewComponent}
    ]),
    MarkdownModule.forChild()
  ]
})
export class LogBookViewModule {

}
