inserirRota('/inserir_infoimovel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO INFOIMOVEL 
    (
        ID, 
        VALOR_IMOVEL,
        FINALIDADE,
        TIPO_IMOVEL
        )
        VALUES
        (
        "${dados.nome}", 
        "${dados.telefone}", 
        "${dados.cpf}",
        "${dados.email}"
        )`)
        .then(result => {
        console.log('CLiete inserido com sucesso!')
        resposta({message: 'CLiete inserido com sucesso'})
    }).catch(erro => {
        console.log('CLiete NÃO FOI inserido com sucesso!')
        console.log(erro)
        resposta({message: 'Cliente NÃO FOI inserido com sucesso"'})
    });
})
inserirRota('/inserir_cliente',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO CLIENTE 
    (
        CODIGO, 
        NOME,
        TELEFONE,
        CPF,
        EMAIL,
        DATA_NASCIMENTO
        )
        VALUES
        (
        "${dados.nome}", 
        "${dados.telefone}", 
        "${dados.cpf}",
        "${dados.email}"
        )`)
        .then(result => {
        console.log('CLiete inserido com sucesso!')
        resposta({message: 'CLiete inserido com sucesso'})
    }).catch(erro => {
        console.log('CLiete NÃO FOI inserido com sucesso!')
        console.log(erro)
        resposta({message: 'Cliente NÃO FOI inserido com sucesso"'})
    });
})
inserirRota('/inserir_caracteristicas',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO CARACTERISTICAS 
    (
        CODIGO, 
        DORMITORIOS,
        SUITES,
        BANHEIROS,
        VAGAS_GARAGEM,
        LAVANDERIA
        )
        VALUES
        (
        "${dados.nome}", 
        "${dados.telefone}", 
        "${dados.cpf}",
        "${dados.email}"
        )`)
        .then(result => {
        console.log('CLiete inserido com sucesso!')
        resposta({message: 'CLiete inserido com sucesso'})
    }).catch(erro => {
        console.log('CLiete NÃO FOI inserido com sucesso!')
        console.log(erro)
        resposta({message: 'Cliente NÃO FOI inserido com sucesso"'})
    });
})