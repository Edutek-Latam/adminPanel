import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TitleComponent } from './components/title/title.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { UsersComponent } from './page/users/users.component';
import { UserNewComponent } from './page/user-new/user-new.component';
import { CardSmComponent } from './components/card-sm/card-sm.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { CardMdComponent } from './components/card-md/card-md.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TitleComponent,
    DashboardComponent,
    UsersComponent,
    UserNewComponent,
    CardSmComponent,
    CardHeaderComponent,
    TituloComponent,
    CardMdComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
