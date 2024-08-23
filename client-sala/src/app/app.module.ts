import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarSalaComponent } from './components/criar-sala/criar-sala.component';
import { SalaDetalhesComponent } from './components/sala-detalhes/sala-detalhes.component';
import { ListagemSalasComponent } from './components/listagem-salas/listagem-salas.component';
import { AtualizaSalaComponent } from './components/atualiza-sala/atualiza-sala.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CriarSalaComponent,
    SalaDetalhesComponent,
    ListagemSalasComponent,
    AtualizaSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
