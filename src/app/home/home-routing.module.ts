import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
  {path:'',  component:LayoutComponent, children:[
    {path:'home', component: DashboardComponent},
    {path:'user', component: UsersComponent}
  ],}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
