import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles: ``
})
export class TitleComponent implements OnInit {

@Input() text!:string

constructor(){
  console.log(this.text)
}
  ngOnInit(): void {
    console.log(this.text)
    //throw new Error('Method not implemented.');
  }



}
