import { MembroService } from './services/membro.service';
import { MembroAppComponent } from './membro.app.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListaComponent } from './lista/lista.component';

import { MembroRoutingModule } from './membro.route';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MembroResolve } from './services/membro.resolve';

@NgModule({
  declarations: [
    MembroAppComponent,
    ListaComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MembroRoutingModule,
    HttpClientModule
  ],
  providers: [
    MembroService,
    MembroResolve
  ]

})
export class MembrosModule { }
