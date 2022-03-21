import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  objeto={}

  logar(){   
    this.usuarioService.buscaLogin(this.username, this.pass).then((resultado: any) => {
      if(resultado != ""){
        localStorage.setItem("NOME", this.username);
        localStorage.setItem("PASSWORD", this.pass);
        localStorage.setItem("USER", this.username)
        this.router.navigate(["/tela-principal"])
      }
    })
  }

  
}