import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'maincomponent',
    pathMatch: 'full'
  },
  {
    path: 'maincomponent',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    RouterModule.forRoot([
      {path: '', component: MainComponent, pathMatch: 'full'},
      {path: 'logbook', loadChildren: () => import('./logbook/logbook.module').then(m => m.LogBookMainModule)},
    ], {initialNavigation: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
