import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert'
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
  gotoGerenciaCliente2(indice){
    this.router.navigate(['/gerencia-proprietario/' + indice])
  }
  removeCliente(indice){
      const rmCPF = this.lista[indice].cpf
      this.usuarioService.deletaProprietario(rmCPF)
      swal({
        title: "Imóvel editado com sucesso!",
        icon: "success"
    });
    
    window.clearInterval(1000000)
    document.location.reload();
  }

  imageURL = ""
  lista=[]
  objeto={}
  objeto2={}
  filtroS = ""
  listaProprietarios2 = []
  filtro(){
    console.log(this.filtroS)
    this.listaProprietarios = this.listaProprietarios2
    this.listaProprietarios = this.listaProprietarios.filter(element => element.NOME.toString().toUpperCase().startsWith(this.filtroS.toUpperCase()))
    this.listaTaman = this.listaProprietarios.length
  }
  listaTaman = 0
  ngOnInit(): void {
    this.usuarioService.buscarClientes()
    .then(resultado => {
      this.listaProprietarios.push(resultado);
      this.listaProprietarios = this.listaProprietarios[0]
      this.listaProprietarios2 = this.listaProprietarios
      this.listaTaman = this.listaProprietarios.length
    console.log(this.listaProprietarios)
    }).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
    
  }
  listaProprietarios = [];
}

interface Cliente {

  NOME: string;
  TELEFONE: number;
  CPF: string;
  EMAIL: string;
  DATA: number;
  IMAGEM: string;
}