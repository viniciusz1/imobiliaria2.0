import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-gerencia-imovel',
  templateUrl: './gerencia-imovel.component.html',
  styleUrls: ['./gerencia-imovel.component.css']
})
export class GerenciaImovelComponent implements OnInit {
  idRota = undefined
  lista = [];
  objeto = {};
  constructor(private router: Router,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute) {


  }
  gotoGerenciaImovel() {
    this.router.navigate(['/gerencia-imovel/novo'])
  }
  gotoListaImoveis() {
    this.router.navigate(['/lista-imoveis'])
  }
  gotoGerenciaCliente() {
    this.router.navigate(['/gerencia-proprietario/novo'])
  }
  gotoListaClientes() {
    this.router.navigate(['/lista-proprietarios'])
  }
  gotoTelaPrincipal() {
    this.router.navigate(['/tela-principal'])
  }
  oldCodigoImovel;
  codigo = 0;


  imageURL;
  openModal;
  user = localStorage.getItem('USER')
  id = 0
  proprietario = "";
  corretor = "";
  valorImovel = "";
  codigoImovel = "";
  finalidadeImovel = "";
  tipoImovel = "";
  cidadeImovel = "";
  bairroImovel = "";
  logradouroImovel = "";
  numeroImovel = "";
  complementoImovel = "";
  regiaoImovel = "";
  estadoImovel = "";
  zonaImovel = "";
  dormitoriosImovel = "";
  suitesImovel = "";
  banheirosImovel = "";
  vagasImovel = "";
  lavanderiaImovel = "";
  sacadaImovel = "";
  churrasImovel = "";
  festasImovel = "";
  descricaoImovel = "";
  clienteNomeObj = {}
  mensagemImovel = "";
  cepImovel=""
  ngOnInit(): void {
    this.usuarioService.buscarClientes().then(
      (resultado => this.clienteNomeObj = resultado)
    )
    const idRota = this.route.snapshot.paramMap.get('id');
    this.idRota = idRota;


    if (idRota != 'novo') {
      this.codigo = parseInt(idRota) - 1;
      console.log(this.codigo)
      this.mensagemImovel = "Editar Imóvel"
      this.usuarioService.testando()
        .then(
          // resultado => console.log(resultado),
          (resultado: infoImovel[]) => {
            this.codigoImovel = resultado[this.codigo].CODIGO_REFERENCIA;
            this.oldCodigoImovel = resultado[this.codigo].CODIGO_REFERENCIA;
            this.descricaoImovel = resultado[this.codigo].DESCRICAO,
              this.valorImovel = resultado[this.codigo].VALOR_IMOVEL,
              this.finalidadeImovel = resultado[this.codigo].FINALIDADE,
              this.tipoImovel = resultado[this.codigo].TIPO_IMOVEL,
              this.dormitoriosImovel = resultado[this.codigo].DORMITORIOS,
              this.suitesImovel = resultado[this.codigo].SUITES,
              this.banheirosImovel = resultado[this.codigo].BANHEIROS,
              this.vagasImovel = resultado[this.codigo].VAGAS_GARAGEM,
              this.lavanderiaImovel = resultado[this.codigo].LAVANDERIA,
              this.sacadaImovel = resultado[this.codigo].SACADA,
              this.churrasImovel = resultado[this.codigo].CHURRASQUEIRA,
              this.festasImovel = resultado[this.codigo].AREA_FESTAS,
              this.bairroImovel = resultado[this.codigo].BAIRRO,
              this.logradouroImovel = resultado[this.codigo].LOGRADOURO,
              this.numeroImovel = resultado[this.codigo].NUMERO,
              this.complementoImovel = resultado[this.codigo].COMPLEMENTO,
              this.regiaoImovel = resultado[this.codigo].REGIAO,
              this.estadoImovel = resultado[this.codigo].ESTADO,
              this.zonaImovel = resultado[this.codigo].ZONA,
              this.cidadeImovel = resultado[this.codigo].CIDADE,
              this.corretor = resultado[this.codigo].CORRETOR,
              this.proprietario = resultado[this.codigo].PROPRIETARIO,
              this.imageURL = resultado[this.codigo].IMAGEM
          }

        ).catch(erro => {
          console.log("ERRO AO BUSCAR INFOIMÓVEL:", erro)
        })
    }else{
      this.mensagemImovel = "Cadastrar Imóvel" 
    }
  }


  cepPreenche(){
      this.usuarioService.buscar(this.cepImovel).subscribe((dados) => this.populaForm(dados))
  }
  populaForm(dados){
    this.cidadeImovel = dados.localidade,
    this.bairroImovel = dados.bairro,
    this.complementoImovel = dados.complemento,
    this.estadoImovel = dados.uf,
    this.logradouroImovel = dados.logradouro,
    this.regiaoImovel = dados.ddd
  }

  jogaDB() {
    if (this.codigoImovel != "" && this.proprietario != "" && this.corretor != "" && this.valorImovel && this.finalidadeImovel != "" && this.tipoImovel != "") {
      if (this.idRota != 'novo') {
        this.usuarioService.updateInfoimovel(this.oldCodigoImovel, this.codigoImovel, this.valorImovel, this.finalidadeImovel, this.tipoImovel, this.descricaoImovel, this.imageURL)
        this.usuarioService.updateLocalizacao(this.bairroImovel, this.logradouroImovel, this.numeroImovel, this.complementoImovel, this.regiaoImovel, this.estadoImovel, this.zonaImovel, this.codigoImovel, this.cidadeImovel)
        this.usuarioService.updateCaracteristicas(this.dormitoriosImovel, this.suitesImovel, this.banheirosImovel, this.vagasImovel, this.lavanderiaImovel, this.sacadaImovel, this.churrasImovel, this.festasImovel, this.oldCodigoImovel)
        this.usuarioService.updateResponsavel(this.codigoImovel, this.proprietario, this.corretor)
        this.gotoListaImoveis();
      } else {

        this.usuarioService.inserirInfoimovel(this.codigoImovel, this.valorImovel, this.finalidadeImovel, this.tipoImovel, this.descricaoImovel, this.imageURL, false),
          this.usuarioService.inserirLocalizacao(this.bairroImovel, this.logradouroImovel, this.numeroImovel, this.complementoImovel, this.regiaoImovel, this.estadoImovel, this.zonaImovel, this.codigoImovel, this.cidadeImovel, this.cepImovel),
          this.usuarioService.inserirCaracteristicas(this.dormitoriosImovel, this.suitesImovel, this.banheirosImovel, this.vagasImovel, this.lavanderiaImovel, this.sacadaImovel, this.churrasImovel, this.festasImovel, this.codigoImovel),
          this.usuarioService.inserirResponsavel(this.codigoImovel, this.proprietario, this.corretor)
        this.id = this.id + 1
        //this.gotoListaImoveis();
      }
    } else {
      alert("Preencha no mínimo todas as informações com *")
    }

    console.log(this.idRota)
  }

  mostrarImagem(event) {
    const file = new FileReader
    file.onload = (e) => {
      this.imageURL = e.target.result;
      console.log(this.imageURL)
    }
    file.readAsDataURL(event.target.files[0])
    console.log(file)
  }

  abrirModal() {
    this.openModal = 1
  }

  /*
  getMoney( str )
  {
          return parseInt( str.replace(/[\D]+/g,'') );
  }
  formatReal( int )
  {
          var tmp = int+'';
          tmp = tmp.replace(/([0-9]{1})$/g, ",$1");
          if( tmp.length > 6 )
                  tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  
          return tmp;
  }
  valorInt = 0
  valorInt2*/

  formatarMoeda(valor) {
    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{1})$/g, ",$1");

    if (valor.length > 5) {
      valor = valor.replace(/([0-9]{3}),([0-9]{1}$)/g, ".$1,$2");
    }
    return valor;
  }



  k(i) {
    var v = i.value.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    i.value = v;
    this.valorImovel = i;
  }

  valorMask() {

    if (this.valorImovel.toString().length > 2) {
      this.valorImovel = this.formatarMoeda(this.valorImovel)
    }
  }



}
interface infoImovel {
  IMAGEM: string;
  DESCRICAO: string;
  CIDADE: string;
  CORRETOR: string;
  PROPRIETARIO: string;
  CODIGO_REFERENCIA: string;
  VALOR_IMOVEL: string;
  FINALIDADE: string;
  TIPO_IMOVEL: string;
  CODIGO: string;
  BAIRRO: string;
  LOGRADOURO: string;
  NUMERO: string;
  COMPLEMENTO: string;
  REGIAO: string;
  ESTADO: string;
  ZONA: string;
  INFOIMOVEL_CODIGO_REFERENCIA: string;
  DORMITORIOS: string;
  SUITES: string;
  BANHEIROS: string;
  VAGAS_GARAGEM: string;
  LAVANDERIA: string;
  SACADA: string;
  CHURRASQUEIRA: string;
  AREA_FESTAS: string;

}
