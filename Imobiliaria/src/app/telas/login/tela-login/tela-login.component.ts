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
  logar(){


  this.router.navigate(['/tela-principal'])
  }
  ngOnInit(): void {
    this.usuarioService.buscarUsuarios()
    .then(resultado => {
      console.log('RESULTADO:', resultado);

    }).catch(erro => {
      console.log('ERRO AO BUSCAR USUARIOS:', erro)
    })
  }
  
}
