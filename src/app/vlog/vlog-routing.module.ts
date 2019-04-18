import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VlogComponent } from './components/vlog/vlog.component';

const routes: Routes = [
  {path: '', component: VlogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VlogRoutingModule { }
