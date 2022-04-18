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

inserirRota('/delete_vendido',
function inserir(dados, resposta) {
    console.log(dados)
    database(`DELETE FROM VENDIDOS WHERE CODIGO_IMOVEL = "${dados.codigo}"`)
        .then(result => {
        console.log('infoimovel removido com sucesso!')
        resposta({message: 'infoimovel  FOI removido com sucesso"'})
    }).catch(erro => {
        console.log('infoimovel NÃO FOI removido com sucesso!')
        console.log(erro)
        resposta({message: 'infoimovel NÃO FOI removido com sucesso"'})
    });
})


inserirRota('/buscar_vendido_true',
    function (dados, resposta) {
        console.log(dados, resposta);       
    database(`SELECT INFOIMOVEL.*, CARACTERISTICAS.*, LOCALIZACAO.*, RESPONSAVEL.* FROM INFOIMOVEL
    INNER JOIN CARACTERISTICAS ON CARACTERISTICAS.INFOIMOVEL_CODIGO_REFERENCIA = INFOIMOVEL.CODIGO_REFERENCIA
    INNER JOIN LOCALIZACAO ON LOCALIZACAO.INFOIMOVEL_CODIGO_REFERENCIA = CARACTERISTICAS.INFOIMOVEL_CODIGO_REFERENCIA
    INNER JOIN RESPONSAVEL ON RESPONSAVEL.INFOIMOVEL_CODIGO_REFERENCIA = LOCALIZACAO.INFOIMOVEL_CODIGO_REFERENCIA
    WHERE INFOIMOVEL.VENDIDO = 0`)
        .then(result => {
        resposta(result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários'})
    });
})

inserirRota('/buscar_vendido_false',
    function (dados, resposta) {
        console.log(dados, resposta);       
    database(`SELECT VENDIDOS.*, INFOIMOVEL.*, CARACTERISTICAS.*, LOCALIZACAO.*, RESPONSAVEL.* FROM INFOIMOVEL
    INNER JOIN CARACTERISTICAS ON CARACTERISTICAS.INFOIMOVEL_CODIGO_REFERENCIA = INFOIMOVEL.CODIGO_REFERENCIA
    INNER JOIN LOCALIZACAO ON LOCALIZACAO.INFOIMOVEL_CODIGO_REFERENCIA = CARACTERISTICAS.INFOIMOVEL_CODIGO_REFERENCIA
    INNER JOIN RESPONSAVEL ON RESPONSAVEL.INFOIMOVEL_CODIGO_REFERENCIA = LOCALIZACAO.INFOIMOVEL_CODIGO_REFERENCIA
    INNER JOIN VENDIDOS ON VENDIDOS.CODIGO_IMOVEL = RESPONSAVEL.INFOIMOVEL_CODIGO_REFERENCIA 
    WHERE VENDIDOS.CODIGO_USUARIO = ${dados.usuario}
    `)
        .then(result => {
        resposta(result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários'})
    });
})


inserirRota('/buscar_vendido',
    function (dados, resposta) {
        console.log(dados, resposta);       
    database(`SELECT * FROM VENDIDOS`)
        .then(result => {
        resposta(result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários'})
    });
})

inserirRota('/select_vendacompra',
    function (dados, resposta) {
        console.log(dados, resposta);

       
    database(`SELECT * FROM VENDA_COMPRA`)
        .then(result => {
        resposta(result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários'})
    });
})
