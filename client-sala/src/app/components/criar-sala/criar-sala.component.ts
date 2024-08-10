import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sala } from 'src/app/sala';
import { SalaService } from 'src/app/servers/sala.service';

@Component({
  selector: 'app-criar-sala',
  templateUrl: './criar-sala.component.html',
  styleUrls: ['./criar-sala.component.css']
})
export class CriarSalaComponent implements OnInit {
  sala: Sala = new Sala();
  enviado: boolean = false;

  constructor(private salaService: SalaService, private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  novaSala(): void {
    this.enviado = false
    this.sala = new Sala();
  }

  salvar() {
    this.salaService.criarSala(this.sala)
      .subscribe(data => {
        console.log(data),
          error => console.log(error);
        this.sala = new Sala();
        this.irParaALista();
      })
  }

  enviar() {
    this.enviado = true;
    this.salvar();
  }

  irParaALista() {
    this.router.navigate(['/listagem-salas']);
  }

}
