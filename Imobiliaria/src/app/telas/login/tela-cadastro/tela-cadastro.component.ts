import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }
  user = ""
  pass = ""
  pass2 = "";
  adm = false;
  quantidade = 0;
  cadastrar(){
    if(this.user != "" && this.pass != "" && this.pass2 != ""){
      if(this.pass2 == this.pass){
        this.usuarioService.inserirUsuario(this.user, this.pass, this.adm)
        alert("Usuário inserido com sucesso!")
        this.router.navigate(['/'])
    }
    }

  }
}
