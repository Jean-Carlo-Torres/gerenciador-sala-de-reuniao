import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from 'src/app/sala';
import { SalaService } from 'src/app/servers/sala.service';

@Component({
  selector: 'app-atualiza-sala',
  templateUrl: './atualiza-sala.component.html',
  styleUrls: ['./atualiza-sala.component.css']
})
export class AtualizaSalaComponent implements OnInit {

  id!: number;
  sala!: Sala;
  enviado: boolean = false;

  constructor(private salaService: SalaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sala = new Sala();
    this.id = this.route.snapshot.params['id'];
    this.salaService.buscarSala(this.id)
      .subscribe(data => {
        console.log(data)
        this.sala = data;
      }, error => console.log(error));
  }

  atualizarSala() {
    this.salaService.atualizarSala(this.id, this.sala)
      .subscribe(data => {
        console.log(data);
        this.irParaALista();
      },
      error => console.log(error)
    )
  }

  enviar() {
    this.enviado = true;
    this.atualizarSala();
  }

  irParaALista() {
    this.router.navigate(['/salas']);
  }

}
