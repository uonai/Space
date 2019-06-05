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
import { VitaeComponent } from './vitae/vitae.component';
import { VitaeAdminComponent } from './vitae/vitae-admin/vitae-admin.component';
import { VitaeDashboardComponent } from './vitae/vitae-dashboard/vitae-dashboard.component';

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
    MainComponent,
    VitaeComponent,
    VitaeAdminComponent,
    VitaeDashboardComponent
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
      {path: 'logbook', loadChildren: './logbook/logbook.module#LogBookModule'}
    ], {initialNavigation: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
