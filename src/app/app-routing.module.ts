import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './home/layout/layout.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./home/home.module').then(m =>m.HomeModule)},
  {path:'login',component:LoginComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
