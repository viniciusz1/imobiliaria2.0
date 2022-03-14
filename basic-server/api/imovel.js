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
        IMAGEM
        )
        VALUES
        (
        "${dados.id}", 
        "${dados.valorImovel}", 
        "${dados.finalidade}",
        "${dados.tipoImovel}",
        "${dados.descricao}",
        "${dados.imagem}"
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


inserirRota('/update_infoimovel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`UPDATE INFOIMOVEL SET CODIGO_REFERENCIA = "${dados.id}",
        VALOR_IMOVEL = "${dados.valorImovel}",
        FINALIDADE = "${dados.finalidade}",
        TIPO_IMOVEL = "${dados.tipoImovel}",
        DESCRICAO = "${dados.tipoImovel}",
        IMAGEM = "${dados.imagem}"
        WHERE
        CODIGO_REFERENCIA = "${dados.oldcodigo}"`)
        .then(result => {
        console.log(dados)
        resposta({dados})
    }).catch(erro => {
        console.log('infoimovel NÃO FOI ALTERADO com sucesso!')
        console.log(erro)
        resposta({message: 'infoimovel NÃO FOI ALTERADO com sucesso"'})
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



inserirRota('/deleta_imovel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`
        DELETE FROM *
        WHERE INFOIMOVEL_CODIGO_REFERENCIA = "${dados.codigo};
        `)
        .then(result => {
        console.log('deletou!')
        resposta({message: 'deletou'})
    }).catch(erro => {
        console.log('NÃO deletou!')
        console.log(erro)
        resposta({message: 'NÃO deletou'})
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
        INFOIMOVEL_CODIGO_REFERENCIA = "${dados.codigo}"
        )`)
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