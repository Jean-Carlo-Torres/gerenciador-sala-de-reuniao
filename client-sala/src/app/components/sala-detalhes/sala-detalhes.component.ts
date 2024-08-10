import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from 'src/app/sala';
import { SalaService } from 'src/app/servers/sala.service';

@Component({
  selector: 'app-sala-detalhes',
  templateUrl: './sala-detalhes.component.html',
  styleUrls: ['./sala-detalhes.component.css']
})
export class SalaDetalhesComponent implements OnInit {

  id!: number;
  sala!: Sala

  constructor(private salaService: SalaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sala = new Sala();
    this.id = this.route.snapshot.params['id'];
    this.salaService.buscarSala(this.id).subscribe(data => {
      this.sala = data;
    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/salas']);
  }

}
