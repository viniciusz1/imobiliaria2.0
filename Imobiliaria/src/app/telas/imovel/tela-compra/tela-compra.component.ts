import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import swal from 'sweetalert'
@Component({
  selector: 'app-tela-compra',
  templateUrl: './tela-compra.component.html',
  styleUrls: ['./tela-compra.component.css']
})
export class TelaCompraComponent implements OnInit {

  constructor(private router: Router,
    private usuarioService: UsuarioService) {


    this.usuarioService.buscarVEndidoTrue().then(result => {
      this.lista.push(result);
      this.lista = this.lista[0]
      this.tamanho = this.lista.length
    })

  }
  tamanho = 0
  goToCompra() {
    this.router.navigate(['compra'])
  }
  goToVenda() {
    this.router.navigate(['venda'])

  }
  alteraVendido(indice) {
    swal({
      title: "Você tem certeza que deseja comprar esse imóvel?",
      text: "Valor: " + this.lista[indice].VALOR_IMOVEL,
      icon: "info",
      buttons: ["Cancelar", true],
    })
      .then((willDelete) => {
        if (willDelete) {
          swal({
            icon: "success",
            title: "Imóvel comprado!",
            text: "Volte sempre!"
          })
            .then((value) => {
              if (value) {
                this.usuarioService.buscarVEndidoTrue().then(result => {
                  this.usuarioService.updateInfoimovelVendido(result[indice].CODIGO_REFERENCIA, true)
                  this.usuarioService.inserirVendido(result[indice].CODIGO_REFERENCIA, localStorage.getItem("ID"))
                  console.log(result[indice].CODIGO_REFERENCIA, localStorage.getItem("ID"))
                  document.location.reload()
                })
              }
            })
        } else {

          swal({ title: "Imóvel não comprado!", text: "É uma pena!", icon: "error", dangerMode: true, });
        }
      });
  }
  selectValue = ""
  ordenar() {
    console.log(this.selectValue)
    if (this.selectValue == "Maior valor para menor") {
      for (let i = 0; i < this.lista.length; i++) {
        for (let j = 0; j < this.lista.length; j++) {
          if (parseInt(this.lista[i].VALOR_IMOVEL) > parseInt(this.lista[j].VALOR_IMOVEL)) {
            let temp = this.lista[i]
            this.lista[i] = this.lista[j]
            this.lista[j] = temp
          }
        }
      }
    }else if(this.selectValue == "Menor valor para maior"){
      for (let i = 0; i < this.lista.length; i++) {
        for (let j = 0; j < this.lista.length; j++) {
          if (parseInt(this.lista[i].VALOR_IMOVEL) < parseInt(this.lista[j].VALOR_IMOVEL)) {
            let temp = this.lista[i]
            this.lista[i] = this.lista[j]
            this.lista[j] = temp
          }
        }
      }
    }
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


    console.log(this.lista)
  }
  codigo = 0;
  lengthObjeto = 0;
  objeto = {}
  ngOnInit(): void {
    console.log(this.lista)
  }
}
