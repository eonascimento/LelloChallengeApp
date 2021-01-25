import { Membro } from './../models/membro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {

  public membros: Membro[];
  errorMessage: string;
  constructor() { }

  ngOnInit(): void {
    this.membros = new Array<Membro>();
    var membro = new Membro()
    membro.login = 'CaerusKaru';
    membro.avatar_url = 'https://avatars.githubusercontent.com/u/416563?v=4';
    this.membros.push(membro);
  }

}
