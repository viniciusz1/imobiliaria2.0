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
    console.log(resultado[0].ID)
    }).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
  }
  objeto={}
  gotoCadastro(){
    this.router.navigate(['/cadastro'])
  }

  logar(){   
    this.usuarioService.buscaLogin(this.username, this.pass).then((resultado: any) => {
      if(resultado != ""){
        localStorage.setItem("NOME", this.username);
        localStorage.setItem("PASSWORD", this.pass);
        localStorage.setItem("USER", this.username);
        localStorage.setItem("ID", resultado[0].ID)
        this.router.navigate(["/tela-principal"])
      }else{
        alert("Usuário ou senha Incorretos!")
      }
    })
  }

  
}