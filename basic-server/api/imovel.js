inserirRota('/inserir_infoimovel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO INFOIMOVEL 
    (
        CODIGO_REFERENCIA, 
        VALOR_IMOVEL,
        FINALIDADE,
        TIPO_IMOVEL,
        DESCRICAO,
        IMAGEM,
        VENDIDO
        )
        VALUES
        (
        "${dados.id}", 
        "${dados.valorImovel}", 
        "${dados.finalidade}",
        "${dados.tipoImovel}",
        "${dados.descricao}",
        "${dados.imagem}",
        "${dados.vendido}"
        )`)
        .then(result => {
        console.log('infoimovel inserido com sucesso!')
        resposta({message: 'infoimovel inserido com sucesso'})
    }).catch(erro => {
        console.log('infoimovel NÃO FOI inserido com sucesso!')
        console.log(erro)
        resposta({message: 'infoimovel NÃO FOI inserido com sucesso"'})
    });
})


inserirRota('/inserir_vendido',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO VENDIDOS 
    (
        CODIGO_IMOVEL,
        CODIGO_USUARIO
        )
        VALUES
        (
        "${dados.imovel}", 
        "${dados.usuario}"
        )`)
        .then(result => {
        console.log('infoimovel inserido com sucesso!')
        resposta({message: 'infoimovel inserido com sucesso'})
    }).catch(erro => {
        console.log('infoimovel NÃO FOI inserido com sucesso!')
        console.log(erro)
        resposta({message: 'infoimovel NÃO FOI inserido com sucesso"'})
    });
})




inserirRota('/update_infoimovel_vendido',
function inserir(dados, resposta) {
    console.log(dados)
    database(`UPDATE INFOIMOVEL SET VENDIDO = "${dados.vendido}"
        WHERE
        CODIGO_REFERENCIA = "${dados.id}"`)
        .then(result => {
        console.log('infoimovel ALTERADO com sucesso!')
        resposta({message: 'infoimovel  FOI ALTERADO com sucesso"'})
    }).catch(erro => {
        console.log('infoimovel NÃO FOI ALTERADO com sucesso!')
        console.log(erro)
        resposta({message: 'infoimovel NÃO FOI ALTERADO com sucesso"'})
    });
})

inserirRota('/update_infoimovel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`UPDATE INFOIMOVEL SET CODIGO_REFERENCIA = "${dados.id}",
        VALOR_IMOVEL = "${dados.valorImovel}",
        FINALIDADE = "${dados.finalidade}",
        TIPO_IMOVEL = "${dados.tipoImovel}",
        DESCRICAO = "${dados.descricao}",
        IMAGEM = "${dados.imagem}"
        WHERE
        CODIGO_REFERENCIA = "${dados.oldcodigo}"`)
        .then(result => {
        console.log('infoimovel ALTERADO com sucesso!')
        resposta({message: 'infoimovel  FOI ALTERADO com sucesso"'})
    }).catch(erro => {
        console.log('infoimovel NÃO FOI ALTERADO com sucesso!')
        console.log(erro)
        resposta({message: 'infoimovel NÃO FOI ALTERADO com sucesso"'})
    });
})

inserirRota('/delete_infoimovel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`DELETE FROM INFOIMOVEL WHERE CODIGO_REFERENCIA = "${dados.codigo}"`)
        .then(result => {
        console.log('infoimovel removido com sucesso!')
        resposta({message: 'infoimovel  FOI removido com sucesso"'})
    }).catch(erro => {
        console.log('infoimovel NÃO FOI removido com sucesso!')
        console.log(erro)
        resposta({message: 'infoimovel NÃO FOI removido com sucesso"'})
    });
})
inserirRota('/delete_caracteristicas',
function inserir(dados, resposta) {
    console.log(dados)
    database(`DELETE FROM CARACTERISTICAS WHERE INFOIMOVEL_CODIGO_REFERENCIA = "${dados.codigo}"`)
        .then(result => {
        console.log('caracteristicas removido com sucesso!')
        resposta({message: 'caracteristicas  FOI removido com sucesso"'})
    }).catch(erro => {
        console.log('caracteristicas NÃO FOI removido com sucesso!')
        console.log(erro)
        resposta({message: 'caracteristicas NÃO FOI removido com sucesso"'})
    });
})
inserirRota('/delete_localizacao',
function inserir(dados, resposta) {
    console.log(dados)
    database(`DELETE FROM LOCALIZACAO WHERE INFOIMOVEL_CODIGO_REFERENCIA = "${dados.codigo}"`)
        .then(result => {
        console.log('localizacao removido com sucesso!')
        resposta({message: 'localizacao  FOI removido com sucesso"'})
    }).catch(erro => {
        console.log('localizacao NÃO FOI removido com sucesso!')
        console.log(erro)
        resposta({message: 'localizacao NÃO FOI removido com sucesso"'})
    });
})
inserirRota('/delete_responsavel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`DELETE FROM RESPONSAVEL WHERE INFOIMOVEL_CODIGO_REFERENCIA = "${dados.codigo}"`)
        .then(result => {
        console.log('responsavel removido com sucesso!')
        resposta({message: 'responsavel  FOI removido com sucesso"'})
    }).catch(erro => {
        console.log('responsavel NÃO FOI removido com sucesso!')
        console.log(erro)
        resposta({message: 'responsavel NÃO FOI removido com sucesso"'})
    });
})




inserirRota('/inserir_caracteristicas',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO CARACTERISTICAS 
    (
        DORMITORIOS,
        SUITES,
        BANHEIROS,
        VAGAS_GARAGEM,
        LAVANDERIA,
        SACADA,
        CHURRASQUEIRA,
        AREA_FESTAS,
        INFOIMOVEL_CODIGO_REFERENCIA
        )
        VALUES
        (
        "${dados.dormitorios}", 
        "${dados.suites}", 
        "${dados.banheiros}",
        "${dados.vagas}",
        "${dados.lavanderia}",
        "${dados.sacada}",
        "${dados.churrasqueira}",
        "${dados.festas}",
        "${dados.codigo}"
        )`)
        .then(result => {
        console.log('caracteristicas inserido com sucesso!')
        resposta({message: 'caracteristicas inserido com sucesso'})
    }).catch(erro => {
        console.log('caracteristicas NÃO FOI inserido com sucesso!')
        console.log(erro)
        resposta({message: 'caracteristicas  NÃO FOI inserido com sucesso"'})
    });
})




inserirRota('/update_responsavel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`UPDATE RESPONSAVEL SET PROPRIETARIO = "${dados.proprietario}",
        CORRETOR = "${dados.corretor}"
        WHERE
        INFOIMOVEL_CODIGO_REFERENCIA = "${dados.oldCodigoImovel}"`)
        .then(result => {
        console.log("deu boa alterando responsavel")
        resposta({message:"deu boa alterando responsavel"})
    }).catch(erro => {
        console.log('responsavle NÃO FOI ALTERADO com sucesso!')
        console.log(erro)
        resposta({message: 'responsavle NÃO FOI ALTERADO com sucesso"'})
    });
})

inserirRota('/update_caracteristicas',
function inserir(dados, resposta) {
    console.log(dados)
    database(`UPDATE CARACTERISTICAS SET DORMITORIOS = "${dados.dormitorios}",
        SUITES = "${dados.suites}",
        BANHEIROS = "${dados.banheiros}",
        VAGAS_GARAGEM = "${dados.vagas}",
        LAVANDERIA = "${dados.lavanderia}",
        SACADA = "${dados.sacada}",
        CHURRASQUEIRA = "${dados.churrasqueira}",
        AREA_FESTAS = "${dados.festas}"
        WHERE 
        INFOIMOVEL_CODIGO_REFERENCIA = "${dados.codigo}"`)
        .then(result => {
        console.log('caracteristicas ALTERADO com sucesso!')
        resposta({message: 'caracteristicas ALTERADO com sucesso'})
    }).catch(erro => {
        console.log('caracteristicas NÃO FOI ALTERADO com sucesso!')
        console.log(erro)
        resposta({message: 'caracteristicas  NÃO FOI ALTERADO com sucesso"'})
    });
})



inserirRota('/inserir_responsavel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO RESPONSAVEL 
    (
        INFOIMOVEL_CODIGO_REFERENCIA,
        PROPRIETARIO,
        CORRETOR
        )
        VALUES
        (
        "${dados.infoimovelCodigo}",
        "${dados.proprietario}",
        "${dados.corretor}"
        )`)
        .then(result => {
        console.log('responsavel inserido com sucesso!')
        resposta({message: 'responsavel inserido com sucesso'})
    }).catch(erro => {
        console.log('responsavel NÃO FOI inserido com sucesso!')
        console.log(erro)
        resposta({message: 'responsavel NÃO FOI inserido com sucesso"'})
    });
})

inserirRota('/update_localizacao',
function inserir(dados, resposta) {
    console.log(dados)
    database(`UPDATE LOCALIZACAO SET  
        BAIRRO= "${dados.bairro}",
        LOGRADOURO = "${dados.logradouro}", 
        NUMERO = "${dados.numero}",
        COMPLEMENTO = "${dados.complemento}",
        REGIAO = "${dados.regiao}",
        ESTADO = "${dados.estado}",
        ZONA = "${dados.zona}",
        CIDADE = "${dados.cidade}"
        WHERE INFOIMOVEL_CODIGO_REFERENCIA = "${dados.codigo}"`)
        .then(result => {
        console.log('localizacao alterado com sucesso!')
        resposta({message: 'localizacao alterado com sucesso'})
    }).catch(erro => {
        console.log('localizacao NÃO FOI alterado com sucesso!')
        console.log(erro)
        resposta({message: 'localizacao NÃO FOI alterado com sucesso"'})
    });
})



inserirRota('/inserir_localizacao',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO LOCALIZACAO 
    (
        BAIRRO,
        LOGRADOURO,
        NUMERO,
        COMPLEMENTO,
        REGIAO,
        ESTADO,
        ZONA,
        INFOIMOVEL_CODIGO_REFERENCIA,
        CIDADE
        )
        VALUES
        (
        "${dados.bairro}", 
        "${dados.logradouro}", 
        "${dados.numero}",
        "${dados.complemento}",
        "${dados.regiao}",
        "${dados.estado}",
        "${dados.zona}",
        "${dados.codigo}",
        "${dados.cidade}"

        )`)
        .then(result => {
        console.log('localizacao inserido com sucesso!')
        resposta({message: 'localizacao inserido com sucesso'})
    }).catch(erro => {
        console.log('localizacao NÃO FOI inserido com sucesso!')
        console.log(erro)
        resposta({message: 'localizacao NÃO FOI inserido com sucesso"'})
    });
})





// inserirRota('/buscar_infoimovel',
//     function (dados, resposta) {
//         console.log(dados, resposta);

       
//     database(`SELECT * FROM INFOIMOVEL`)
//         .then(result => {
//     resposta(result)
//     }).catch(erro => {
//         resposta({erro: 'Erro ao buscar os usuários'})
//     });
// })
// inserirRota('/buscar_caracteristicas',
//     function (dados, resposta) {
//         console.log(dados, resposta);

       
//     database(`SELECT * FROM CARACTERISTICAS`)
//         .then(result => {
//     resposta(result)
//     }).catch(erro => {
//         resposta({erro: 'Erro ao buscar os usuários'})
//     });
// })
// inserirRota('/buscar_localizacao',
//     function (dados, resposta) {
//         console.log(dados, resposta);

       
//     database(`SELECT * FROM LOCALIZACAO`)
//         .then(result => {
//     resposta(result)
//     }).catch(erro => {
//         resposta({erro: 'Erro ao buscar os usuários'})
//     });
// })