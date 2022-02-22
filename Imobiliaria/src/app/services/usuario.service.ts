import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

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
  buscarInfoimovel(){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/buscar_infoimovel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido => resolve(resolvido))
      .catch(rejeitado);
    })
  }

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

  inserirResponsavel(proprietario, corretor){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_responsavel', {
        method: 'POST',
        body: JSON.stringify(
          {
            proprietario, corretor
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
  inserirInfoimovel(id, valorImovel, finalidade, tipoImovel){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_infoimovel', {
        method: 'POST',
        body: JSON.stringify(
          {
          id, valorImovel, finalidade, tipoImovel  
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

  inserirLocalizacao(bairro, logradouro, numero, complemento, regiao, estado, zona){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_localizacao', {
        method: 'POST',
        body: JSON.stringify(
          {
            bairro, logradouro, numero, complemento, regiao, estado, zona  
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

  inserirCaracteristicas(dormitorios, suites, banheiros, vagas, lavanderia, sacada, churrasqueira, festas){
    return new Promise((resolve, rejeitado) => {
      fetch('/api/inserir_caracteristicas', {
        method: 'POST',
        body: JSON.stringify(
          {
            dormitorios, suites, banheiros, vagas, lavanderia, sacada, churrasqueira, festas  
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