import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProprietariosComponent } from './lista-proprietarios/lista-proprietarios.component';
import { GerenciaProprietarioComponent } from './gerencia-proprietario/gerencia-proprietario.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'gerencia-proprietario/:id',
    component: GerenciaProprietarioComponent,
  },
  {
    path: 'lista-proprietarios',
    component: ListaProprietariosComponent,
  },
]

@NgModule({
  declarations: [ListaProprietariosComponent, GerenciaProprietarioComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ]
})
export class ProprietarioModule { }
