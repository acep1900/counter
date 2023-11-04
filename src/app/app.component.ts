import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter: number = 10;
  increaseBy(value: number){
    this.counter+=value;
  }

  //increaseOne(){
  //  this.counter ++;
  //}
  //decreaseOne(){
   // this.counter --;
  //}
}
