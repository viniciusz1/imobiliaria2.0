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