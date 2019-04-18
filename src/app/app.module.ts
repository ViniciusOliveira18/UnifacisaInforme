import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NewsPostsComponent } from './shared/components/news-posts/news-posts.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
