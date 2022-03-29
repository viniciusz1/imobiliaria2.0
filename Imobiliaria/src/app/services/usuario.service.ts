import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuarios(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/buscar_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }
  buscarCompra(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/compra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }
  buscarVendaCompra(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/select_vendacompra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }
  

  buscarClientes(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/buscar_clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }

  updateInfoimovel(oldcodigo, id, valorImovel, finalidade, tipoImovel, descricao, imagem){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/update_infoimovel', {
        method: 'POST',
        body: JSON.stringify(
          {
          oldcodigo, id, valorImovel, finalidade, tipoImovel, descricao, imagem
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }



  inserircliente(nome, telefone, cpf, email, data, imagem){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_cliente', {
        method: 'POST',
        body: JSON.stringify(
          {
            nome, telefone, cpf, email, data, imagem
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }


  inserirVendaCompra(codigo, tipo){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_vendacompra', {
        method: 'POST',
        body: JSON.stringify(
          {
            codigo, tipo
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }


  inserirUsuario(user, pass, adm){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/criar_usuario', {
        method: 'POST',
        body: JSON.stringify(
          {
            user, pass, adm
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }

  updateCliente(nome, telefone, cpf, oldcpf, email, data, imagem){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/update_cliente', {
        method: 'POST',
        body: JSON.stringify(
          {
            nome, telefone, cpf, oldcpf, email, data, imagem
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }

  deletaProprietario(cpf){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/deleta_cliente', {
        method: 'POST',
        body: JSON.stringify(
          {
            cpf
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }


  inserirResponsavel(infoimovelCodigo, proprietario, corretor){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_responsavel', {
        method: 'POST',
        body: JSON.stringify(
          {
            infoimovelCodigo, proprietario, corretor
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }

    updateResponsavel(oldCodigoImovel, proprietario, corretor){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/update_responsavel', {
        method: 'POST',
        body: JSON.stringify(
          {
            oldCodigoImovel, proprietario, corretor
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }




  

  inserirInfoimovel(id, valorImovel, finalidade, tipoImovel, descricao, imagem){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_infoimovel', {
        method: 'POST',
        body: JSON.stringify(
          {
          id, valorImovel, finalidade, tipoImovel, descricao, imagem
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }
 
  testando(){
      return new Promise((resolve, rejeitado) => {
        fetch('/api/testando', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(resolvido => resolve(resolvido))
        .catch(rejeitado);
      })
    }

    
  // testando(){
  //   return new Promise((resolve, rejeitado) => {
  //     fetch('/api/testando', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then(function (result) {
  //       console.log(result)
  //       return result.json();
  //   }).then(function (dados){
  //      console.log(dados);
  //   }).catch(function(erro) {
  //       console.log(erro);
  //   })
  //   })
  // }


  inserirLocalizacao(bairro, logradouro, numero, complemento, regiao, estado, zona, codigo, cidade){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_localizacao', {
        method: 'POST',
        body: JSON.stringify(
          {
            bairro, logradouro, numero, complemento, regiao, estado, zona, codigo, cidade  
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }
  updateLocalizacao(bairro, logradouro, numero, complemento, regiao, estado, zona, codigo, cidade){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/update_localizacao', {
        method: 'POST',
        body: JSON.stringify(
          {
            bairro, logradouro, numero, complemento, regiao, estado, zona, codigo, cidade  
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }

  inserirCaracteristicas(dormitorios, suites, banheiros, vagas, lavanderia, sacada, churrasqueira, festas, codigo){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_caracteristicas', {
        method: 'POST',
        body: JSON.stringify(
          {
            dormitorios, suites, banheiros, vagas, lavanderia, sacada, churrasqueira, festas, codigo
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }

  deletaInfoimovel(codigo){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/delete_infoimovel', {
        method: 'POST',
        body: JSON.stringify(
          {
            codigo
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }
  deletaCaracteristicas(codigo){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/delete_caracteristicas', {
        method: 'POST',
        body: JSON.stringify(
          {
            codigo
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }
  deletaLocalizacao(codigo){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/delete_localizacao', {
        method: 'POST',
        body: JSON.stringify(
          {
            codigo
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }
  deletaResponsavel(codigo){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/delete_responsavel', {
        method: 'POST',
        body: JSON.stringify(
          {
            codigo
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }


  updateCaracteristicas(dormitorios, suites, banheiros, vagas, lavanderia, sacada, churrasqueira, festas, codigo){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/update_caracteristicas', {
        method: 'POST',
        body: JSON.stringify(
          {
            dormitorios, suites, banheiros, vagas, lavanderia, sacada, churrasqueira, festas, codigo
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
    }).then(function (dados){
        console.log(dados);
    }).catch(function(erro) {
        console.log(erro);
    })
    })
  }
  buscaLogin(nickname, password){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(
          {
            nickname, password 
          })
          ,
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }
}



 
  // buscarCaracteristicas(){
  //   return new Promise((resolve, rejeitado) => {
  //     fetch('/api/buscar_caracteristicas', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then(resultado => resultado.json())
  //     .then(resolvido => resolve(resolvido))
  //     .catch(rejeitado);
  //   })
  // }
  // buscarLocalizacao(){
  //   return new Promise((resolve, rejeitado) => {
  //     fetch('/api/buscar_localizacao', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then(resultado => resultado.json())
  //     .then(resolvido => resolve(resolvido))
  //     .catch(rejeitado);
  //   })
  // }
  