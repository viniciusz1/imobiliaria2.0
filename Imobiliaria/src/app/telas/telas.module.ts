import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tela-principal',
    component: TelaPrincipalComponent,
  },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ]
})
export class TelasModule { }
