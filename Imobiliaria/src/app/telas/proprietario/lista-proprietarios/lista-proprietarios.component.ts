import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-proprietarios',
  templateUrl: './lista-proprietarios.component.html',
  styleUrls: ['./lista-proprietarios.component.css']
})
export class ListaProprietariosComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
    ) {
      const id = this.route.snapshot.paramMap.get('id');
   }
 
  listasClientes = JSON.parse(localStorage.getItem('lista'))
  user = localStorage.getItem('USER')



  gotoGerenciaImovel(){
    this.router.navigate(['/gerencia-imovel/novo'])
  }
  gotoListaImoveis(){
    this.router.navigate(['/lista-imoveis'])
  }
  gotoGerenciaCliente(){
    this.router.navigate(['/gerencia-proprietario/novo'])
  }
  gotoListaClientes(){
    this.router.navigate(['/lista-proprietarios'])
  }
  gotoTelaPrincipal(){
    this.router.navigate(['/tela-principal'])
  }
  
  lista=[]
  objeto={}
  ngOnInit(): void {
    this.usuarioService.buscarClientes()
    .then((resultado: Cliente[])=> {
      for(let i = 0; i < resultado.length; i++){
        this.objeto = {
          nome: resultado[i].NOME,
          telefone: resultado[i].TELEFONE,
          cpf: resultado[i].CPF,
          email: resultado[i].EMAIL,
          data: resultado[i].DATA
        }
        console.log(this.lista)
        this.lista.push(this.objeto)
      }
    }).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
  }
}


interface Cliente {

  NOME: string;
  TELEFONE: number;
  CPF: string;
  EMAIL: string;
  DATA: number;

}