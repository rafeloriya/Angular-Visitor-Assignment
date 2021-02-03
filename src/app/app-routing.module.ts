import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { VisitorComponent } from './visitor/visitor.component';

const routes: Routes = [
  { path: '', redirectTo: 'visitor', pathMatch: 'full' },
  {path:'visitor', component: VisitorComponent},
  {path:'list',component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
