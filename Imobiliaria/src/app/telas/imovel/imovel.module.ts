import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';
import { GerenciaImovelComponent } from './gerencia-imovel/gerencia-imovel.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import CheckLogged from '../../checkLogged';

const routes: Routes = [
  {
    path: 'gerencia-imovel/:id',
    component: GerenciaImovelComponent,
    canActivate: [CheckLogged]

  },
  {
    path: 'lista-imoveis',
    component: ListaImoveisComponent,
    canActivate: [CheckLogged]

  },
]

@NgModule({
  declarations: [ListaImoveisComponent, GerenciaImovelComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
  ],
  providers: [CheckLogged],
})
export class ImovelModule { }
