import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-compra',
  templateUrl: './tela-compra.component.html',
  styleUrls: ['./tela-compra.component.css']
})
export class TelaCompraComponent implements OnInit {

  constructor(private router: Router,
    private usuarioService: UsuarioService) {


      console.log("sdofjapsodi")
      this.usuarioService.buscarVEndidoTrue().then(result => {
        this.lista.push(result);
        this.lista = this.lista[0]
      })

     }
     goToCompra(){
    this.router.navigate(['compra'])
  }
    goToVenda(){
    this.router.navigate(['venda'])

  }
  alteraVendido(indice){
    this.usuarioService.buscarVEndidoTrue().then(result=>{
      this.usuarioService.updateInfoimovelVendido(result[indice].CODIGO_REFERENCIA, true)
      this.usuarioService.inserirVendido(result[indice].CODIGO_REFERENCIA, localStorage.getItem("ID"))
      console.log(result[indice].CODIGO_REFERENCIA,localStorage.getItem("ID"))
      document.location.reload()
    })
}
  lista = []
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
  tamanho = ""
  codigo = 0;
  lengthObjeto = 0;
  objeto={}
  ngOnInit(): void {
    
}}
