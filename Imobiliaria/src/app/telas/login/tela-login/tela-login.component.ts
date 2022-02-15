import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service'

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }
  
  username = ""
  pass = ""

  
  ngOnInit() {
    this.usuarioService.buscarUsuarios()
    .then((resultado: (Object: (String))  => [])=> {
      console.log("RESULTADO:", resultado)
      // this.user = resultado.user;
      // this.password = resultado.password;
    }).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
  }


  logar(){    
    this.usuarioService.buscarUsuarios()
    .then((resultado: User[])=> {
      for(let i = 0; i < resultado.length; i++){
        if(this.username == resultado[i].NOME && this.pass == resultado[i].PASSWORD){
          this.router.navigate(['/tela-principal'])
          localStorage.setItem('USER', this.username)
        }
      }
      // this.user = resultado.user;
      // this.password = resultado.password;
    }).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
  }

  
}
interface User {

  NOME: string;
  PASSWORD: string;

}