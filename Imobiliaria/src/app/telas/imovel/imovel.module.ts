import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';
import { GerenciaImovelComponent } from './gerencia-imovel/gerencia-imovel.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import CheckLogged from '../../checkLogged';
import { TelaCompraComponent } from './tela-compra/tela-compra.component';
import { TelaVendaComponent } from './tela-venda/tela-venda.component';
import CheckLogged2 from '../../CheckLogged2';
import { HttpClientModule } from '@angular/common/http'

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
  {
    path: 'compra',
    component: TelaCompraComponent,
    canActivate: [CheckLogged2]

  },
  {
    path: 'venda',
    component: TelaVendaComponent,
    canActivate: [CheckLogged2]

  }
]

@NgModule({
  declarations: [ListaImoveisComponent, GerenciaImovelComponent, TelaCompraComponent, TelaVendaComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CheckLogged, CheckLogged2],
})
export class ImovelModule { }
