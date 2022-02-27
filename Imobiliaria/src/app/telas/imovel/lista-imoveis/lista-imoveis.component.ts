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
  caracteristicas={}
  localizacao={}
  ngOnInit(): void {
    for(let i = 0; i < 3; i++){
    this.usuarioService.buscarInfoimovel()
    .then(
      (resultado: infoImovel[])=> {
     
        this.infoImovel = {
          valor: resultado[i].VALOR_IMOVEL,
          codigoReferencia: resultado[i].CODIGO_REFERENCIA,
          finalidade: resultado[i].FINALIDADE,
          tipoImovel: resultado[i].TIPO_IMOVEL,
        
      }
    },
    resultado => console.log(resultado)
    ).catch(erro => {
      console.log("ERRO AO BUSCAR INFOIMÓVEL:", erro)
    })
   
    this.usuarioService.buscarCaracteristicas()
    .then(
      (resultado: caracteristicas[])=> {
        
        this.caracteristicas = {
          codigo: resultado[i].CODIGO,
          dormitorios: resultado[i].DORMITORIOS,
          suites: resultado[i].SUITES,
          vagas: resultado[i].VAGAS_GARAGEM,
          lavanderia: resultado[i].LAVANDERIA,
          sacada: resultado[i].SACADA,
          churrasqueira: resultado[i].CHURRASQUEIRA,
          festas: resultado[i].AREA_FESTAS,
          infoimovelCodigo: resultado[i].INFOIMOVEL_CODIGO_REFERENCIA,
        
      }
    },
    resultado => console.log(resultado)
    ).catch(erro => {
      console.log("ERRO AO BUSCAR INFOIMÓVEL:", erro)
    })


    this.usuarioService.buscarLocalizacao()
    .then(
      (resultado: localizacao[])=> {
        
        this.localizacao = {
          codigo: resultado[i].CODIGO,
          bairro: resultado[i].BAIRRO,
          logradouro: resultado[i].LOGRADOURO,
          numero: resultado[i].NUMERO,
          complemento: resultado[i].COMPLEMENTO,
          regiao: resultado[i].REGIAO,
          estado: resultado[i].ESTADO,
          zona: resultado[i].ZONA,
          infoimovelCodigo: resultado[i].INFOIMOVEL_CODIGO_REFERENCIA,
        
      }
      
      this.objeto = {
        localizacao : this.localizacao,
        caracteristicas: this.caracteristicas,
        infoImovel: this.infoImovel
      }
      this.lista.push(this.objeto)
      console.log('oi')
      console.log(this.lista)
    },
    resultado => console.log(resultado)
    ).catch(erro => {
      console.log("ERRO AO BUSCAR INFOIMÓVEL:", erro)
    })
  }


  }




  
}
interface responsavel {
  PROPRIETARIO: string;
  CORRETOR: string;
}

interface infoImovel {
  CODIGO_REFERENCIA: string;
  VALOR_IMOVEL: string;
  FINALIDADE: string;
  TIPO_IMOVEL: string;

}
interface localizacao {
  CODIGO : string;
  BAIRRO : string;
  LOGRADOURO: string;
  NUMERO : string;
  COMPLEMENTO : string;
  REGIAO: string;
  ESTADO : string;
  ZONA: string;
  INFOIMOVEL_CODIGO_REFERENCIA: string;

}
interface caracteristicas{
  CODIGO: string;
  DORMITORIOS: string;
  SUITES: string;
  BANHEIROS: string;
  VAGAS_GARAGEM: string;
  LAVANDERIA: string;
  SACADA: string;
  CHURRASQUEIRA : string;
  AREA_FESTAS: string;
  INFOIMOVEL_CODIGO_REFERENCIA: string;

}
