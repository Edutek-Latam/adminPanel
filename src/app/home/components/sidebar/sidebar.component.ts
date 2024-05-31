import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  menu  = [
    {
      menu:"home",
      icon:"",
      link:'/'
    },
    {
      menu:"User",
      icon:"",
      link:'',
      submenu:[
        {
          item:"Docentes",
          icon:"",
          link:''
        },
        {
          item:"Alumnos",
          icon:"",
          link:''
        }
      ]
    }
  ]

}
