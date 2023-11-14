import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CadAlunoComponent } from './cad-aluno/cad-aluno.component';
import { ApoliceComponent } from './apolice/apolice.component';

const routes: Routes = [
  { path: 'calculadora',component: CalculadoraComponent},
  {path: 'calculadora-media', component:CalcularMediaComponent},
  {path: 'cada-aluno', component:CadAlunoComponent},
  {path: 'apolice', component:ApoliceComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
