inserirRota('/deleta_cliente',
function inserir(dados, resposta) {
    console.log(dados)
    database(`DELETE FROM CLIENTE WHERE CPF = "${dados.cpf}"`)
        .then(result => {
        console.log('infoimovel removido com sucesso!')
        resposta({message: 'infoimovel  FOI removido com sucesso"'})
    }).catch(erro => {
        console.log('infoimovel NÃO FOI removido com sucesso!')
        console.log(erro)
        resposta({message: 'infoimovel NÃO FOI removido com sucesso"'})
    });
})



inserirRota('/inserir_cliente',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO CLIENTE 
    (
        NOME, 
        TELEFONE,
        CPF,
        EMAIL,
        DATA,
        IMAGEM
        )
        VALUES
        (
        "${dados.nome}", 
        "${dados.telefone}", 
        "${dados.cpf}",
        "${dados.email}",
        "${dados.data}",
        "${dados.imagem}"
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

inserirRota('/buscar_clientes',
    function (dados, resposta) {
        console.log(dados, resposta);

       
    database(`SELECT * FROM CLIENTE`)
        .then(result => {
        resposta( result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários'})
    });
})
