import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styles: ``
})
export class CardHeaderComponent {
@Input() titulo: string = ''
@Input() img: string=''
@Input() valor: string='';
}
