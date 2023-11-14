import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { empty, isEmpty } from 'rxjs';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']

})
export class CalcularMediaComponent {

  Ac1?: number ;
  Ac2?: number;
  AG?: number;
  AF?: number;
  resultado:number = 0;
  constructor(){

}
// Metodo usado para calcular a media da nota e caso a nota algumas das notas seja null o metodo muda o valor da nota para 0
  calcMedia(){
    if(this.Ac1 == null){
      this.Ac1 = 0

    }
    if(this.Ac2 == null){
      this.Ac2 = 0

    }
    if(this.AG == null){
      this.AG = 0

    }if(this.AF == null){
      this.AF = 0

    }

    this.resultado = ((this.Ac1 * 0.15) + (this.Ac2 * 0.3) + (this.AG * 0.1) + (this.AF * 0.45))
    return this.resultado
  }

}
