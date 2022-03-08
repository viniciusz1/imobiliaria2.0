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


  inserircliente(nome, telefone, cpf, email, data){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_cliente', {
        method: 'POST',
        body: JSON.stringify(
          {
            nome, telefone, cpf, email, data,
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

  deletarImovel(codigo){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/deleta_imovel', {
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
}



  // buscarInfoimovel(){
  //   return new Promise((resolve, rejeitado) => {
  //     fetch('/api/buscar_infoimovel', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then(resultado => resultado.json())
  //     .then(resolvido => resolve(resolvido))
  //     .catch(rejeitado);
  //   })
  // }
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
  