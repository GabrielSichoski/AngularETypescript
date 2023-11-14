import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-cad-aluno',
  templateUrl: './cad-aluno.component.html',
  styleUrls: ['./cad-aluno.component.css']
})
export class CadAlunoComponent {

// definição de url para conexão com o banco de dados mockapi
  readonly apiURL : string = "https://64e6a1f309e64530d1801dd3.mockapi.io/api/v1/aula"
  constructor(private http: HttpClient){
// dados a serem enviados para o banco de dados
  }
    aluno = {
    RA:"",
    name:"",
    email:"",
    celular:""
    }
    // metodo de cadastro das informações inseridas pelo usuario
  cadastro(){
    alert(this.aluno.name)
    alert(this.aluno.email)
   this.http.post(this.apiURL, this.aluno)
   .subscribe(
    resultado => {
      console.log(resultado)
    },
    erro => {
      if(erro.status == 400){
        console.log(erro)
      }
    }
   )

  }


}


