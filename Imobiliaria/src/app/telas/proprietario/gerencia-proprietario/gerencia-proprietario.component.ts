import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerencia-proprietario',
  templateUrl: './gerencia-proprietario.component.html',
  styleUrls: ['./gerencia-proprietario.component.css']
})
export class GerenciaProprietarioComponent implements OnInit {

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