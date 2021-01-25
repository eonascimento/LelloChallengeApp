import { ListaComponent } from './lista/lista.component';
import { MembroAppComponent } from './membro.app.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes  } from "@angular/router";

const membroRouterConfig: Routes = [
  {
    path: '', component: MembroAppComponent,
    children:[
      {path:'lista-todos', component: ListaComponent}
    ]
  }
]

@NgModule({
  imports: [
      RouterModule.forChild(membroRouterConfig)
  ],
  exports: [RouterModule]
})
export class MembroRoutingModule { }
