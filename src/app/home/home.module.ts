import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TitleComponent } from './components/title/title.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { UsersComponent } from './page/users/users.component';
import { UserNewComponent } from './page/user-new/user-new.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TitleComponent,
    DashboardComponent,
    UsersComponent,
    UserNewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
