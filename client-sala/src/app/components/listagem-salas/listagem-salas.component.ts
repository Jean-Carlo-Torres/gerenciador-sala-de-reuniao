import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sala } from 'src/app/sala';
import { SalaService } from 'src/app/servers/sala.service';

@Component({
  selector: 'app-listagem-salas',
  templateUrl: './listagem-salas.component.html',
  styleUrls: ['./listagem-salas.component.css']
})
export class ListagemSalasComponent implements OnInit {

  salas!: Observable<Sala[]>; 

  constructor(private salaService: SalaService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData(); 
  }

  reloadData() {
    this.salas = this.salaService.listarSalas(); 
  }

  apagarSala(id: number) {
    this.salaService.apagarSala(id).subscribe(
      data => {
        console.log(data);
        this.reloadData(); 
      },
      error => console.log(error)
    );
  }

  detalhesSala(id: number) {
    this.router.navigate(['detalhes-sala', id]); 
  }

  atualizarSala(id: number) {
    this.router.navigate(['atualizar-sala', id]); 
  }

}
