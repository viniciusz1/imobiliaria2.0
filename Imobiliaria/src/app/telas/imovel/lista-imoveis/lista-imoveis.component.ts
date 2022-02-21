import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-imoveis',
  templateUrl: './lista-imoveis.component.html',
  styleUrls: ['./lista-imoveis.component.css']
})
export class ListaImoveisComponent implements OnInit {

  constructor(private router: Router,
    private usuarioService: UsuarioService) { }
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
  modal = 0
  abrirModal(){
    console.log('salve')
    if(this.modal==1){
      this.modal=0;
    }else{
      this.modal=1;
    }

  }
  lista=[]
  objeto={}
  ngOnInit(): void {
    this.usuarioService.buscarInfoimovel()
    .then(
    //   (resultado: Cliente[])=> {
    //   for(let i = 0; i < resultado.length; i++){
    //     this.objeto = {
    //       nome: resultado[i].VALOR_IMOVEL,
    //       telefone: resultado[i].CODIGO_IMOVEL,
    //       cpf: resultado[i].FINALIDADE_IMOVEL,
    //       email: resultado[i].TIPO_IMOVEL,
    //     }
    //     console.log(this.lista)
    //     this.lista.push(this.objeto)
    //   }
    // }
    resultado => console.log(resultado)
    ).catch(erro => {
      console.log("ERRO AO BUSCAR USUÁRIO:", erro)
    })
  }
}


interface Cliente {

  VALOR_IMOVEL: string;
  CODIGO_IMOVEL: number;
  FINALIDADE_IMOVEL: string;
  TIPO_IMOVEL: string;

}
