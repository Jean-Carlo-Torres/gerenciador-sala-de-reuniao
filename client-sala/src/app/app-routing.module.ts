import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarSalaComponent } from './components/criar-sala/criar-sala.component';
import { SalaDetalhesComponent } from './components/sala-detalhes/sala-detalhes.component';
import { AtualizaSalaComponent } from './components/atualiza-sala/atualiza-sala.component';
import { ListagemSalasComponent } from './components/listagem-salas/listagem-salas.component';

const routes: Routes = [
  { path: '', redirectTo: 'salas', pathMatch: 'full' },
  { path: 'salas', component: ListagemSalasComponent },
  { path: 'criar-sala', component: CriarSalaComponent },
  { path: 'detalhes-sala/:id', component: SalaDetalhesComponent },
  { path: 'atualizar-sala/:id', component: AtualizaSalaComponent },
  { path: '**', redirectTo: 'sala' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }