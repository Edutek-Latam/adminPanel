import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-md',
  templateUrl: './card-md.component.html',
  styles: ``
})
export class CardMdComponent {
  @Input() titulo: string = ''
}
