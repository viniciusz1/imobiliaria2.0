import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';
import { GerenciaImovelComponent } from './gerencia-imovel/gerencia-imovel.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'gerencia-imovel',
    component: GerenciaImovelComponent,
  },
  {
    path: 'lista-imoveis',
    component: ListaImoveisComponent,
  },
]

@NgModule({
  declarations: [ListaImoveisComponent, GerenciaImovelComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ]
})
export class ImovelModule { }
