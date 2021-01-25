import { MembroService } from './../services/membro.service';
import { Membro } from './../models/membro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {

  public membros: Membro[];
  errorMessage: string;
  constructor(private membroService: MembroService ) { }

  ngOnInit(): void {
    this.carregarMembros()
  }

  carregarMembros(){
    this.membroService.obterTodos()
        .subscribe(
          result => this.membros = result,
          error => this.errorMessage);
  }

}
