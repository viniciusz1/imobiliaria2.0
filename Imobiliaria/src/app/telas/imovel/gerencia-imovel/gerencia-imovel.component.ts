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

}
