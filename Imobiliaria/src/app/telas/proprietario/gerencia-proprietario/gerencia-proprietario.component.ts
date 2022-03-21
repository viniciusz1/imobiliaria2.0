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

  cadastraCliente(){    
  
      this.usuarioService.inserircliente(this.nomeCliente, this.telefoneCliente, this.cpfCliente, this.emailCliente, this.dataCliente, this.imageURL)
     
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
