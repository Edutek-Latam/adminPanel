import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-sm',
  templateUrl: './card-sm.component.html',
  styles: ``
})
export class CardSmComponent {
  @Input() titulo: string = ''
}
