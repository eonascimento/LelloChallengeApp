import { MembroService } from './../services/membro.service';
import { Component, OnInit } from '@angular/core';
import { Membro } from '../models/membro.model';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent implements OnInit {
  membro: Membro = new Membro();
  errorMessage: string;
  constructor(
    private route: ActivatedRoute,
    private membroService: MembroService) {
      this.membro = this.route.snapshot.data['membro'];
      this.membro.updated_at_format =  new Date(this.membro.created_at).toLocaleDateString('pt-br', {  month: '2-digit', day: '2-digit', year:'numeric' })
     }

  ngOnInit(): void {
    this.ContarSeguidoresPorLogin(this.membro.login);
    this.ContarRepositoriosPorLogin(this.membro.login);
  }

  ContarSeguidoresPorLogin(login: string){
    this.membroService.obterSeguidoresPorLogin(login)
        .subscribe(
          result => this.membro.qtdFollowers = result.length,
          error => this.errorMessage);
  }

  ContarRepositoriosPorLogin(login: string){
    this.membroService.obterRepositoriosPorLogin(login)
        .subscribe(
          result => this.membro.qtdRepos = result.length,
          error => this.errorMessage);
  }
}
