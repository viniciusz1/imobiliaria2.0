import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { FormsModule } from '@angular/forms';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';

@NgModule({
  declarations: [TelaLoginComponent, TelaCadastroComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
