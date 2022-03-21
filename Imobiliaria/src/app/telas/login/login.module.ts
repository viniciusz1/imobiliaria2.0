import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TelaLoginComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
