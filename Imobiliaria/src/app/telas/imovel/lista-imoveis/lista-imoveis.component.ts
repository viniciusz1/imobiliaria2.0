import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert'
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
  tamanho = 0
  codigo = 0;
  removeImovel(indice){
    this.codigo = this.objeto[indice].INFOIMOVEL_CODIGO_REFERENCIA
    this.usuarioService.deletaInfoimovel(this.codigo)
    this.usuarioService.deletaCaracteristicas(this.codigo)
    this.usuarioService.deletaLocalizacao(this.codigo)
    this.usuarioService.deletaResponsavel(this.codigo)
    swal({
      title: "Imóvel removido com sucesso!",
      icon: "success"
  });
    document.location.reload();
  }

  objeto=[]
  ngOnInit(): void {
    this.usuarioService.testando().then((resultado)=>{
      this.objeto.push(resultado)
      this.objeto = this.objeto[0]
      this.tamanho = this.objeto.length
    })
    }
  }

  

