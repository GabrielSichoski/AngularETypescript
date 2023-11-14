import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1?:number;
  num2?:number;
  operacao:string = "+";
  resultado:number = 0;

  calcular(){
    if(this.num1 == null){
      this.num1 = 0
    }
    if(this.num2 == null){
    this.num2 = 0
    }

    alert(this.num1)
    alert(this.num2)
    switch(this.operacao){
      case "+":
        this.resultado = this.num1 + this.num2;
        break;
      case "-":
        this.resultado = this.num1 - this.num2;
        break;
      case "*":
        this.resultado = this.num1 * this.num2;
        break;
      case "/":
        this.resultado = this.num1 / this.num2;
        break
  }
  return this.resultado;
}
}
