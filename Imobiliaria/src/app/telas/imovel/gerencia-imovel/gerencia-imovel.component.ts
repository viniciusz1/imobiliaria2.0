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
  lista=[];
  objeto={};
  constructor(private router: Router,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute) {
     

    }
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

proprietario="";
corretor ="";
valorImovel="";
codigoImovel= "";
finalidadeImovel="";
tipoImovel="";
cidadeImovel="";
bairroImovel="";
logradouroImovel="";
numeroImovel="";
complementoImovel="";
regiaoImovel="";
estadoImovel="";
zonaImovel="";
dormitoriosImovel="";
suitesImovel="";
banheirosImovel="";
vagasImovel="";
lavanderiaImovel="";
sacadaImovel="";
churrasImovel="";
festasImovel="";
descricaoImovel="";
ngOnInit(): void {
  const idRota = this.route.snapshot.paramMap.get('id');

  this.idRota = idRota;

  if (idRota != 'novo') {
    this.codigo = parseInt(idRota) - 1;
    console.log(this.codigo)
    this.usuarioService.testando()
    .then(
       // resultado => console.log(resultado),
      (resultado: infoImovel[])=> {
        this.codigoImovel = resultado[this.codigo].CODIGO_REFERENCIA;
        this.oldCodigoImovel = resultado[this.codigo].CODIGO_REFERENCIA;
        this.descricaoImovel= resultado[this.codigo].DESCRICAO,
        this.valorImovel= resultado[this.codigo].VALOR_IMOVEL,
        this.finalidadeImovel= resultado[this.codigo].FINALIDADE,
        this.tipoImovel=resultado[this.codigo].TIPO_IMOVEL,
        this.dormitoriosImovel= resultado[this.codigo].DORMITORIOS,
        this.suitesImovel= resultado[this.codigo].SUITES,
        this.banheirosImovel= resultado[this.codigo].BANHEIROS,
        this.vagasImovel=resultado[this.codigo].VAGAS_GARAGEM,
        this.lavanderiaImovel=resultado[this.codigo].LAVANDERIA,
        this.sacadaImovel=resultado[this.codigo].SACADA,
        this.churrasImovel=resultado[this.codigo].CHURRASQUEIRA,
        this.festasImovel=resultado[this.codigo].AREA_FESTAS,
        this.bairroImovel=resultado[this.codigo].BAIRRO,
        this.logradouroImovel=resultado[this.codigo].LOGRADOURO,
        this.numeroImovel=resultado[this.codigo].NUMERO,
        this.complementoImovel=resultado[this.codigo].COMPLEMENTO,
        this.regiaoImovel=resultado[this.codigo].REGIAO,
        this.estadoImovel= resultado[this.codigo].ESTADO,
        this.zonaImovel= resultado[this.codigo].ZONA,
        this.cidadeImovel= resultado[this.codigo].CIDADE,
        this.corretor= resultado[this.codigo].CORRETOR,
        this.proprietario= resultado[this.codigo].PROPRIETARIO,
        this.imageURL = resultado[this.codigo].IMAGEM
      }
    
    ).catch(erro => {
      console.log("ERRO AO BUSCAR INFOIMÓVEL:", erro)
    })
  }
}


id = 0
  
  jogaDB(){
    if(this.idRota != 'novo'){
      this.usuarioService.updateInfoimovel(this.oldCodigoImovel, this.codigoImovel, this.valorImovel, this.finalidadeImovel, this.tipoImovel, this.descricaoImovel, this.imageURL)
      this.usuarioService.updateLocalizacao(this.bairroImovel, this.logradouroImovel, this.numeroImovel, this.complementoImovel, this.regiaoImovel, this.estadoImovel, this.zonaImovel, this.codigoImovel, this.cidadeImovel)
      this.usuarioService.updateCaracteristicas(this.dormitoriosImovel, this.suitesImovel, this.banheirosImovel, this.vagasImovel, this.lavanderiaImovel, this.sacadaImovel, this.churrasImovel, this.festasImovel, this.oldCodigoImovel)
      this.usuarioService.updateResponsavel(this.codigoImovel, this.proprietario, this.corretor)

    }else{

      this.usuarioService.inserirInfoimovel(this.codigoImovel, this.valorImovel, this.finalidadeImovel, this.tipoImovel, this.descricaoImovel, this.imageURL),
      this.usuarioService.inserirLocalizacao(this.bairroImovel, this.logradouroImovel, this.numeroImovel, this.complementoImovel, this.regiaoImovel, this.estadoImovel, this.zonaImovel, this.codigoImovel, this.cidadeImovel),
      this.usuarioService.inserirCaracteristicas(this.dormitoriosImovel, this.suitesImovel, this.banheirosImovel, this.vagasImovel, this.lavanderiaImovel, this.sacadaImovel, this.churrasImovel, this.festasImovel, this.codigoImovel),
      this.usuarioService.inserirResponsavel(this.codigoImovel, this.proprietario, this.corretor)
      this.id = this.id + 1
      //this.gotoListaImoveis();
    }
  console.log(this.idRota)
  } 
  oldCodigoImovel;
  codigo = 0;


  imageURL;
  teste;
  openModal;

  mostrarImagem(event){
    const file = new FileReader
    file.onload = (e) => {
      this.imageURL = e.target.result;
      console.log(this.imageURL)
    }
    this.teste = 1
    file.readAsDataURL(event.target.files[0])
    console.log(file)
  }
  user = localStorage.getItem('USER')

  abrirModal(){
    this.openModal = 1
  }
  onAddCidade(){ // Função que foi chamada
    console.log("proprietario", this.proprietario); // Imprimiu o valor no Console log.
    console.log('corretor', this.corretor);
    console.log('valorImovel', this.valorImovel);
    console.log('codigoImovel', this.codigoImovel);
    console.log('finalidadeImovel', this.finalidadeImovel);
    console.log('tipoImovel', this.tipoImovel);
    console.log('cidadeImovel', this.cidadeImovel);
    console.log('bairroImovel', this.bairroImovel);
    console.log('logradouroImovel', this.logradouroImovel);
    console.log('numeroImovel', this.numeroImovel);
    console.log('complementoImovel', this.complementoImovel);
    console.log('regiaoImovel', this.regiaoImovel);
    console.log('estadoImovel', this.estadoImovel);
    console.log('zonaImovel', this.zonaImovel);
    console.log('dormitoriosImovel', this.dormitoriosImovel);
    console.log('suitesImovel', this.suitesImovel);
    console.log('banheirosImovel', this.banheirosImovel);
    console.log('vagasImovel', this.vagasImovel);
    console.log('sacadaImovel', this.sacadaImovel);
    console.log('churrasImovel', this.churrasImovel);
    console.log('festasImovel', this.festasImovel);
    console.log('descricaoImovel', this.descricaoImovel);
  }
  clickBotao(){
    var item = document.createElement('li');
    var image = document.createElement('img');
    image.src = this.imageURL;
    console.log(item)
    item.appendChild(image);

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
