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
  telefoneCliente = ""
  list=[]
  oldCpf = ""
  cadastraCliente(){    
      this.codigoRota = this.codigoRota.toString();
      if(this.codigoRota == 'novo'){
        this.usuarioService.inserircliente(this.nomeCliente, this.telefoneCliente, this.cpfCliente, this.emailCliente, this.dataCliente, this.imageURL)
      }else{
        this.usuarioService.updateCliente(this.nomeCliente, this.telefoneCliente, this.cpfCliente, this.oldCpf, this.emailCliente, this.dataCliente, this.imageURL)
      }
     this.gotoListaClientes()
  }

  
  imageURL 
  teste = 9999
  openModal
  telefoneMask (){
    if(this.telefoneCliente.toString().length == 0){
      this.telefoneCliente =  "(" + this.telefoneCliente 
    }else if(this.telefoneCliente.toString().length == 3){
      this.telefoneCliente = this.telefoneCliente + ") "
    }else if(this.telefoneCliente.toString().length == 10){
      this.telefoneCliente = this.telefoneCliente + "-"
    }
  }
  dateMask (){
    if(this.dataCliente.toString().length == 2 || this.dataCliente.toString().length == 5){
      this.dataCliente =  this.dataCliente += "/"
    }
  }
  cpfMask(){
    if(this.cpfCliente.toString().length == 3 || this.cpfCliente.toString().length == 7){
      this.cpfCliente = this.cpfCliente += "."
    }else if(this.cpfCliente.toString().length == 11){
      this.cpfCliente = this.cpfCliente += "-"
    }
  }
  mostrarImagem(event){
    const file = new FileReader
    file.onload = (e) => {
      this.imageURL = e.target.result;
    }
    this.teste = 1
    file.readAsDataURL(event.target.files[0])
    console.log(this.imageURL)
  }

  

  user = localStorage.getItem('USER')


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
  codigo = 0;
  codigoRota = "";
  mensagemBotao = "";
  ngOnInit(): void {
    const idRota = this.route.snapshot.paramMap.get('id');
    this.codigoRota = idRota;
    if (idRota != 'novo') {
      this.codigo = parseInt(idRota) - 1;
      console.log(this.codigo)
      this.mensagemBotao =  "Editar Proprietário"
    this.usuarioService.buscarClientes()
    .then((resultado: (Object: (String))  => [])=> {
      
      console.log(resultado)
      this.oldCpf = resultado[idRota].CPF;
      this.nomeCliente = resultado[idRota].NOME;
      this.cpfCliente = resultado[idRota].CPF;
      this.emailCliente = resultado[idRota].EMAIL;
      this.dataCliente = resultado[idRota].DATA;
      this.telefoneCliente = resultado[idRota].TELEFONE;      
      this.imageURL = resultado[idRota].IMAGEM;
    }).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
  }else{
    this.mensagemBotao = "Cadastrar Proprietário"
  }
}

}
