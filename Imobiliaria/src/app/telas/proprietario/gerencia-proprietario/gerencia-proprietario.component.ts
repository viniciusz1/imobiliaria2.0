import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-gerencia-proprietario',
  templateUrl: './gerencia-proprietario.component.html',
  styleUrls: ['./gerencia-proprietario.component.css']
})
export class GerenciaProprietarioComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,    
    private usuarioService: UsuarioService
  ) { }
  nomeCliente = ""
  cpfCliente = ""
  emailCliente = ""
  dataCliente = ""
  list=[]

  logar(){    
    this.usuarioService.inserircliente(this.nomeCliente, this.cpfCliente, this.emailCliente, this.dataCliente)
    .then(resultado => (
      console.log(resultado)
    )      
      
    ).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
  }

  

  teste() {
    let objeto = {
      nome: this.nomeCliente,
      cpf: this.cpfCliente,
      email: this.emailCliente,
      data: this.dataCliente
    }
    this.list.push(objeto)
    console.log(this.list)
    localStorage.setItem("lista",JSON.stringify(this.list))
  }







  gotoGerenciaImovel() {
    this.router.navigate(['/gerencia-imovel/novo'])
  }
  gotoListaImoveis() {
    this.router.navigate(['/lista-imoveis'])
  }
  gotoGerenciaCliente() {
    this.router.navigate(['/gerencia-proprietario/novo'])
  }
  gotoListaClientes() {
    this.router.navigate(['/lista-proprietarios'])
  }
  gotoTelaPrincipal() {
    this.router.navigate(['/tela-principal'])
  }
  ngOnInit(): void {
    this.usuarioService.buscarClientes()
    .then((resultado: (Object: (String))  => [])=> {
      console.log("RESULTADO:", resultado)
      // this.user = resultado.user;
      // this.password = resultado.password;
    }).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
  }

}
