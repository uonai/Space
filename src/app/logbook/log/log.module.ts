import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LogComponent} from './log.component';
import {MarkdownModule} from 'ngx-markdown';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: LogComponent},
      { path: ':id', component: LogComponent, pathMatch: 'full'}
    ]),
    MarkdownModule.forChild(),
  ]
})
export class LogModule {

}
