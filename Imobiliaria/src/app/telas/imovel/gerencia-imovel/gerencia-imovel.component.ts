import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerencia-imovel',
  templateUrl: './gerencia-imovel.component.html',
  styleUrls: ['./gerencia-imovel.component.css']
})
export class GerenciaImovelComponent implements OnInit {

  constructor(private router: Router) { }
  gotoGerenciaImovel(){
    this.router.navigate(['/gerencia-imovel'])
  }
  gotoListaImoveis(){
    this.router.navigate(['/lista-imoveis'])
  }
  gotoGerenciaCliente(){
    this.router.navigate(['/gerencia-proprietario'])
  }
  gotoListaClientes(){
    this.router.navigate(['/lista-proprietarios'])
  }
  gotoTelaPrincipal(){
    this.router.navigate(['/tela-principal'])
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
    document.getElementById("SavedNFT").appendChild(item);
    image.id = 'imagemSalva'



    this.openModal = 2;
  }
}
