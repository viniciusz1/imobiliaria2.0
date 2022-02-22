import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-gerencia-imovel',
  templateUrl: './gerencia-imovel.component.html',
  styleUrls: ['./gerencia-imovel.component.css']
})
export class GerenciaImovelComponent implements OnInit {

  constructor(private router: Router,
    private usuarioService: UsuarioService) { }
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

proprietario="";
corretor ="";
valorImovel="";
codigoImovel= "";
finalidadeImovel="";
tipoImovel="";
cidadeImovel="";
bairroImovel="";
logradouroImovel="";
numeroImovel="";
complementoImovel="";
regiaoImovel="";
estadoImovel="";
zonaImovel="";
dormitoriosImovel="";
suitesImovel="";
banheirosImovel="";
vagasImovel="";
lavanderiaImovel="";
sacadaImovel="";
churrasImovel="";
festasImovel="";
descricaoImovel="";

onAddCidade(){ // Função que foi chamada
  console.log("proprietario", this.proprietario); // Imprimiu o valor no Console log.
  console.log('corretor', this.corretor);
  console.log('valorImovel', this.valorImovel);
  console.log('codigoImovel', this.codigoImovel);
  console.log('finalidadeImovel', this.finalidadeImovel);
  console.log('tipoImovel', this.tipoImovel);
  console.log('cidadeImovel', this.cidadeImovel);
  console.log('bairroImovel', this.bairroImovel);
  console.log('logradouroImovel', this.logradouroImovel);
  console.log('numeroImovel', this.numeroImovel);
  console.log('complementoImovel', this.complementoImovel);
  console.log('regiaoImovel', this.regiaoImovel);
  console.log('estadoImovel', this.estadoImovel);
  console.log('zonaImovel', this.zonaImovel);
  console.log('dormitoriosImovel', this.dormitoriosImovel);
  console.log('suitesImovel', this.suitesImovel);
  console.log('banheirosImovel', this.banheirosImovel);
  console.log('vagasImovel', this.vagasImovel);
  console.log('sacadaImovel', this.sacadaImovel);
  console.log('churrasImovel', this.churrasImovel);
  console.log('festasImovel', this.festasImovel);
  console.log('descricaoImovel', this.descricaoImovel);
}


  jogaDB(){
    
  this.usuarioService.inserirInfoimovel(this.codigoImovel, this.valorImovel, this.finalidadeImovel, this.tipoImovel),
  this.usuarioService.inserirLocalizacao(this.bairroImovel, this.logradouroImovel, this.numeroImovel, this.complementoImovel, this.regiaoImovel, this.estadoImovel, this.zonaImovel),
  this.usuarioService.inserirCaracteristicas(this.dormitoriosImovel, this.suitesImovel, this.banheirosImovel, this.vagasImovel, this.lavanderiaImovel, this.sacadaImovel, this.churrasImovel, this.festasImovel),
  this.usuarioService.inserirResponsavel(this.proprietario, this.corretor)
  } 
  ngOnInit(): void {
  }
  imageURL 
  teste
  openModal

  mostrarImagem(event){
    const file = new FileReader
    file.onload = (e) => {
      this.imageURL = e.target.result;
    }
    this.teste = 1
    file.readAsDataURL(event.target.files[0])
  }


  abrirModal(){
    this.openModal = 1
  }

  clickBotao(){
    var item = document.createElement('li');
    var image = document.createElement('img');
    image.src = this.imageURL;
    console.log(item)
    item.appendChild(image);
  }
}
