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
        CIDADE = "${dados.cidade}",
        CEP = "${dados.cep}",
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
        CIDADE,
        CEP
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
        "${dados.cidade}",
        "${dados.cep}"

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