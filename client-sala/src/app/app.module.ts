import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalaComponent } from './components/sala/sala.component';
import { CriarSalaComponent } from './components/criar-sala/criar-sala.component';
import { SalaDetalhesComponent } from './components/sala-detalhes/sala-detalhes.component';
import { ListagemSalasComponent } from './components/listagem-salas/listagem-salas.component';
import { AtualizaSalaComponent } from './components/atualiza-sala/atualiza-sala.component';

@NgModule({
  declarations: [
    AppComponent,
    SalaComponent,
    CriarSalaComponent,
    SalaDetalhesComponent,
    ListagemSalasComponent,
    AtualizaSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
