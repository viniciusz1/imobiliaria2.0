import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProprietariosComponent } from './lista-proprietarios/lista-proprietarios.component';
import { GerenciaProprietarioComponent } from './gerencia-proprietario/gerencia-proprietario.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import CheckLogged from '../../checkLogged';

const routes: Routes = [
  {
    path: 'gerencia-proprietario/:id',
    component: GerenciaProprietarioComponent,
    canActivate: [CheckLogged]
  },
  {
    path: 'lista-proprietarios',
    component: ListaProprietariosComponent,
    canActivate: [CheckLogged]
  },
]

@NgModule({
  declarations: [ListaProprietariosComponent, GerenciaProprietarioComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule 
  ],
  providers: [CheckLogged],
})
export class ProprietarioModule { }
