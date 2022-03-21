import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { Routes, RouterModule } from '@angular/router';
import CheckLogged from '../checkLogged'

const routes: Routes = [
  {
    path: 'tela-principal',
    component: TelaPrincipalComponent,
    canActivate: [CheckLogged]
  },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  providers: [CheckLogged],
})
export class TelasModule { }
