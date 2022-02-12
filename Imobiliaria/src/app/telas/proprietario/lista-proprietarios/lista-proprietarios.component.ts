import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-proprietarios',
  templateUrl: './lista-proprietarios.component.html',
  styleUrls: ['./lista-proprietarios.component.css']
})
export class ListaProprietariosComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {
      const id = this.route.snapshot.paramMap.get('id');
   }
 
  listasClientes = JSON.parse(localStorage.getItem('lista'))
  
  gotoGerenciaImovel(){
    this.router.navigate(['/gerencia-imovel/novo'])
  }
  gotoListaImoveis(){
    this.router.navigate(['/lista-imoveis'])
  }
  gotoGerenciaCliente(){
    this.router.navigate(['/gerencia-proprietario/novo'])
  }
  gotoListaClientes(){
    this.router.navigate(['/lista-proprietarios'])
  }
  gotoTelaPrincipal(){
    this.router.navigate(['/tela-principal'])
  }
  ngOnInit(): void {
    console.log(this.listasClientes)
  }

}
