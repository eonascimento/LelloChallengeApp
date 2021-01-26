import { MembroService } from './../services/membro.service';
import { Membro } from './../models/membro.model';
import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {
  public membros: Membro[];
  public membrosFiltrado: Membro[];
  filtro: string = "";
  errorMessage: string;
  constructor(private membroService: MembroService ) { }

  ngOnInit(): void {
    this.carregarMembros()
  }

  filtrar() {
    this.membrosFiltrado = this.membros.filter( m => m.login.toLowerCase().includes(this.filtro.trim().toLowerCase()));
  }

  limparFIltro(){
    this.membrosFiltrado = this.membros;
    this.filtro = '';
  }

  carregarMembros(){
    this.membroService.obterTodos()
        .subscribe(
          result => {
            this.membros = result,
            this.membrosFiltrado = result
          },
          error => this.errorMessage);
  }

}
