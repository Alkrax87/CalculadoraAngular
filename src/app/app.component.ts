import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculadoraAngular';

  num1:number = 0
  num2:number = 0
  res:number = 0
  error:string = ''

  suma(){
    this.res = this.num1 + this.num2;
    this.error = "";
  }
  resta(){
    this.res = this.num1 - this.num2;
    this.error = "";
  }
  multiplicacion(){
    this.res = this.num1 * this.num2;
    this.error = "";
  }
  division(){
    if (this.num2 == 0) {
      this.error = "No se puede dividir entre 0";
    } else {
      this.res = this.num1 / this.num2;
    }
  }
}
