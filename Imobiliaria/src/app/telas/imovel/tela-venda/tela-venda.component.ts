import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import swal from 'sweetalert'
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
    swal({
      title: "Você tem certeza que deseja vender esse imóvel?",
      text: "Valor: "+ this.lista[indice].VALOR_IMOVEL,
      icon: "info",
      buttons: ["Cancelar", true],
    })
      .then((willDelete) => {
        if (willDelete) {
          swal({
            icon: "success",
            title: "Imóvel vendido!",
            text: "Volte sempre!"
          })
            .then((value) => {
              if (value) {
                this.usuarioService.buscarVendidoFalse(localStorage.getItem('ID')).then(imovel => {
                  this.usuarioService.updateInfoimovelVendido(imovel[indice].CODIGO_REFERENCIA, 0)
                  this.usuarioService.deletaVendido(imovel[indice].CODIGO_REFERENCIA)
                  document.location.reload()
                })
              }
            })
        } else {     
          swal({ title: "Imóvel não vendido!", text: "É uma pena!", icon: "error", dangerMode: true, });
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

  }
  tamanho = 0
  codigo = 0;
  lengthObjeto = 0;
  objeto = {}
  ngOnInit(): void {
    
    this.usuarioService.buscarVendidoFalse(localStorage.getItem('ID')).then(result => {
      this.lista.push(result)
      this.lista = this.lista[0]
      this.tamanho = this.lista.length
    })
  }
}
