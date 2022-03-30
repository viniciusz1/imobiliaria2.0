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
    private usuarioService: UsuarioService) { }

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

  objeto={}
  ngOnInit(): void {
    this.usuarioService.buscarCompra().then(resultado => {
      this.objeto = resultado
    });
  }
}
