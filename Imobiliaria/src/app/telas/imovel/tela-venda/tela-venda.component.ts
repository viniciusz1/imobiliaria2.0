import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-venda',
  templateUrl: './tela-venda.component.html',
  styleUrls: ['./tela-venda.component.css']
})
export class TelaVendaComponent implements OnInit {

  constructor(private router: Router,
    private usuarioService: UsuarioService) {


   

  }
  goToCompra() {
    this.router.navigate(['compra'])
  }
  goToVenda() {
    this.router.navigate(['venda'])

  }
  alteraVendido(indice) {
    this.usuarioService.buscarVendidoFalse(localStorage.getItem('ID')).then(imovel => {
      this.usuarioService.updateInfoimovelVendido(imovel[indice].CODIGO_REFERENCIA, 0)
      this.usuarioService.deletaVendido(imovel[indice].CODIGO_REFERENCIA)
      document.location.reload()
    })
  }
  lista = []
  user = localStorage.getItem('USER')
  modal = 0
  indice = 0
  abrirModal(i) {
    console.log(i)
    this.indice = i
    if (this.modal == 1) {
      this.modal = 0;
    } else {
      this.modal = 1;
    }

  }
  tamanho = ""
  codigo = 0;
  lengthObjeto = 0;
  objeto = {}
  ngOnInit(): void {

    this.usuarioService.buscarVendidoFalse(localStorage.getItem('ID')).then(result => {
      this.lista.push(result)
      this.lista = this.lista[0]
    })


  //   this.usuarioService.testando().then(result => {




  //     this.lengthObjeto = (Object.keys(result).length)
  //     console.log(result)
  //     for (let i = 0; i < this.lengthObjeto; i++) {
  //       if (result[i].VENDIDO == 'true') {
  //         console.log(12321321321)
  //         this.usuarioService.buscarVendido().then(vendido => {
  //           console.log("vendido", vendido)
  //           if(vendido[i].CODIGO_USUARIO == localStorage.getItem("ID")){
  //             this.lista.push(result[i])
  //           }})
  //       }
  //     }
  //   })
   }
}
