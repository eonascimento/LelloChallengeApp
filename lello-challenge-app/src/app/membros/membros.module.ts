import { MembroService } from './services/membro.service';
import { MembroAppComponent } from './membro.app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListaComponent } from './lista/lista.component';

import { MembroRoutingModule } from './membro.route';

@NgModule({
  declarations: [
    MembroAppComponent,
    ListaComponent
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
    MembroService
  ]

})
export class MembrosModule { }
