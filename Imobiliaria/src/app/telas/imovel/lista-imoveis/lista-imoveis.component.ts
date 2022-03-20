import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-imoveis',
  templateUrl: './lista-imoveis.component.html',
  styleUrls: ['./lista-imoveis.component.css']
})
export class ListaImoveisComponent implements OnInit {

  constructor(private router: Router,
    private usuarioService: UsuarioService) { }
  gotoGerenciaImovel(){
    this.router.navigate(['/gerencia-imovel/novo'])
  }
  gotoGerenciaImovel2(index){
    this.router.navigate(['/gerencia-imovel/' + (index+1)])
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
  user = localStorage.getItem('USER')
  modal = 0
  indice = 0
  abrirModal(i){
    console.log(i)
    this.indice = i
    if(this.modal==1){
      this.modal=0;
    }else{
      this.modal=1;
    }

  }
  codigo = 0;
  removeImovel(indice){
    this.codigo = this.lista[indice].codigoReferencia;
    console.log(this.codigo)
    this.usuarioService.deletaInfoimovel(this.codigo)
    this.gotoListaImoveis();
    this.lista.splice(this.indice)
  }

  lista=[]
  objeto={}
  infoImovel={}
  ngOnInit(): void {

    this.usuarioService.testando().then((resultado)=>{
      this.objeto = resultado
      console.log(this.objeto)
    })
    }
  }

  

