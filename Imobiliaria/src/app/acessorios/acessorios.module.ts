import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './botao/botao.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [BotaoComponent, InputComponent],
  imports: [
    CommonModule
  ]
})
export class AcessoriosModule { }
