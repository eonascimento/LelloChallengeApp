import { ListaComponent } from './lista/lista.component';
import { MembroAppComponent } from './membro.app.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes  } from "@angular/router";
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MembroResolve } from './services/membro.resolve';

const membroRouterConfig: Routes = [
  {
    path: '', component: MembroAppComponent,
    children:[
      {path:'lista-todos', component: ListaComponent}
    ]
  },
  {
    path: 'detalhes/:login', component: DetalhesComponent,
    resolve: {
        membro: MembroResolve
    }
  }
]

@NgModule({
  imports: [
      RouterModule.forChild(membroRouterConfig)
  ],
  exports: [RouterModule]
})
export class MembroRoutingModule { }
