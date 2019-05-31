import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LogComponent} from './log.component';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
    // LogComponent,
    RouterModule.forChild([
      { path: '', component: LogComponent},
      { path: ':id', component: LogComponent, pathMatch: 'full'}
    ]),
    MarkdownModule.forChild(),
  ]
})
export class LogModule {

}
