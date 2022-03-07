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
  user = localStorage.getItem('USER')
  modal = 0
  indice = 0
  abrirModal(i){
    this.indice = i
    if(this.modal==1){
      this.modal=0;
    }else{
      this.modal=1;
    }

  }
  lista=[]
  objeto={}
  infoImovel={}
  //saodifjsadiop
  ngOnInit(): void {

    for(let i = 0; i < 8; i++){
    this.usuarioService.testando()
    .then(
      //  resultado => console.log(resultado),
      (resultado: infoImovel[])=> {
        this.infoImovel = {
          descricao: resultado[i].DESCRICAO,
          valor: resultado[i].VALOR_IMOVEL,
          codigoReferencia: resultado[i].CODIGO_REFERENCIA,
          finalidade: resultado[i].FINALIDADE,
          tipoImovel: resultado[i].TIPO_IMOVEL,
          codigo: resultado[i].CODIGO,
          dormitorios: resultado[i].DORMITORIOS,
          suites: resultado[i].SUITES,
          banheiros: resultado[i].BANHEIROS,
          vagas: resultado[i].VAGAS_GARAGEM,
          lavanderia: resultado[i].LAVANDERIA,
          sacada: resultado[i].SACADA,
          churrasqueira: resultado[i].CHURRASQUEIRA,
          festas: resultado[i].AREA_FESTAS,
          infoimovelCodigo: resultado[i].INFOIMOVEL_CODIGO_REFERENCIA,
          bairro: resultado[i].BAIRRO,
          logradouro: resultado[i].LOGRADOURO,
          numero: resultado[i].NUMERO,
          complemento: resultado[i].COMPLEMENTO,
          regiao: resultado[i].REGIAO,
          estado: resultado[i].ESTADO,
          zona: resultado[i].ZONA,
          cidade: resultado[i].CIDADE,
          corretor: resultado[i].CORRETOR,
          proprietario: resultado[i].PROPRIETARIO
      }
      this.lista.push(this.infoImovel)
    }
    ).catch(erro => {
      console.log("ERRO AO BUSCAR INFOIMÓVEL:", erro)
    })
   
      }
      console.log(this.lista)

    }
  }

  


interface infoImovel {
  DESCRICAO: string;
  CIDADE: string;
  CORRETOR: string;
  PROPRIETARIO: string;
  CODIGO_REFERENCIA: string;
  VALOR_IMOVEL: string;
  FINALIDADE: string;
  TIPO_IMOVEL: string;
  CODIGO : string;
  BAIRRO : string;
  LOGRADOURO: string;
  NUMERO : string;
  COMPLEMENTO : string;
  REGIAO: string;
  ESTADO : string;
  ZONA: string;
  INFOIMOVEL_CODIGO_REFERENCIA: string;
  DORMITORIOS: string;
  SUITES: string;
  BANHEIROS: string;
  VAGAS_GARAGEM: string;
  LAVANDERIA: string;
  SACADA: string;
  CHURRASQUEIRA : string;
  AREA_FESTAS: string;

}
