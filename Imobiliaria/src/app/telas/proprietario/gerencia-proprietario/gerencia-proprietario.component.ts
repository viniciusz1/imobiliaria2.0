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
    if(!(this.nomeCliente && this.cpfCliente && this.emailCliente && this.dataCliente && this.telefoneCliente)){
      alert('Preencha todos os campos')
    }else{
      this.usuarioService.inserircliente(this.nomeCliente, this.telefoneCliente, this.cpfCliente, this.emailCliente, this.dataCliente,this.imageURL)
      // console.log(this.imageURL)
      // this.gotoListaClientes();
    }
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

  clickBotao(){
    var item = document.createElement('li');
    var image = document.createElement('img');
    image.src = this.imageURL;
    console.log(item)
    item.appendChild(image);
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
