import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {
  nome:string = ""
  sexo:string = ""
  idade?:number
  valorAuto?:number
  valorApolice:number = 0
// metodo para calcular o valor da apolice 
  calcApoli(){
    if(this.idade == null || this.idade == 0){
      alert("Digite sua idade")
    }
    //caso a idade seja nula ou 0 da um alerta pedindo para digitar a idade para evitar erros desnecessarios
    else if(this.valorAuto == null){
      alert("Digite o valor do veículo")
    }
    //caso o valor do automovel seja null da um alerta para digitar o valor do veiculo
    else if(this.sexo == ""){
      alert("Selecione o sexo")
  }
  //caso o sexo da pessoa não seja selecionado da um alert para selecionar
  else if(this.valorAuto == null || this.valorAuto == 0 ){
    alert("Digite o valor do veículo")
  }
  else if (this.idade >= 25 && this.sexo === "M"){
    this.valorApolice = this.valorAuto * 0.15
  }
  else if (this.idade < 25 && this.sexo === "M"){
    this.valorApolice = this.valorAuto * 0.10

  }
  else if (this.sexo === "F"){
  this.valorApolice = this.valorAuto * 0.08
  }
  return this.valorApolice
}
}
