import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'courses',
    loadChildren: './courses/courses.module#CoursesModule'
  },
  {
    path: 'events',
    loadChildren: './events/events.module#EventsModule'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsModule'
  },
  {
    path: 'vlog',
    loadChildren: './vlog/vlog.module#VlogModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
