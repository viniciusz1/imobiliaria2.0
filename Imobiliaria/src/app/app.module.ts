import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from './telas/login/login.module'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TelaLoginComponent } from  './telas/login/tela-login/tela-login.component'
import { FormsModule } from '@angular/forms';
import { TelasModule } from './telas/telas.module'
import { AcessoriosModule } from './acessorios/acessorios.module'
import { ProprietarioModule } from './telas/proprietario/proprietario.module'
import { ImovelModule } from './telas/imovel/imovel.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TelaLoginComponent,
        canActivate: []
      },
    ]),
    FormsModule,
    TelasModule,
    LoginModule,
    AcessoriosModule,
    ProprietarioModule,
    ImovelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
