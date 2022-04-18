inserirRota('/login',
    function (dados, resposta) {
        console.log(dados, resposta);

       
    database(`SELECT * FROM USER WHERE NOME = "${dados.nickname}" AND PASSWORD = "${dados.password}" LIMIT 1`)
        .then(result => {
            console.log('result:', result);
        resposta(result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários!'})
    });
})

inserirRota('/update_cliente',
function inserir(dados, resposta) {
    console.log(dados)
    database(`UPDATE CLIENTE SET CPF = "${dados.cpf}",
        NOME = "${dados.nome}",
        TELEFONE = "${dados.telefone}",
        EMAIL = "${dados.email}",
        IMAGEM = "${dados.imagem}",
        DATA = "${dados.data}"
        WHERE
        CPF = "${dados.oldcpf}"`)
        .then(result => {
        console.log('update_cliente com sucesso!')
        resposta({message: 'update_cliente com sucesso"'})
    }).catch(erro => {
        console.log('update_cliente NÃO FOI ALTERADO com sucesso!')
        console.log(erro)
        resposta({message: 'update_cliente NÃO FOI ALTERADO com sucesso"'})
    });
})


inserirRota('/buscar_usuario',
    function (dados, resposta) {
        console.log(dados, resposta);

       
    database(`SELECT * FROM USER`)
        .then(result => {
        resposta( result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários'})
    });
})

inserirRota('/testando',
    function (dados, resposta) {
        console.log(dados, resposta);       
    database(`SELECT INFOIMOVEL.*, CARACTERISTICAS.*, LOCALIZACAO.*, RESPONSAVEL.* FROM INFOIMOVEL
    INNER JOIN CARACTERISTICAS ON CARACTERISTICAS.INFOIMOVEL_CODIGO_REFERENCIA = INFOIMOVEL.CODIGO_REFERENCIA
    INNER JOIN LOCALIZACAO ON LOCALIZACAO.INFOIMOVEL_CODIGO_REFERENCIA = CARACTERISTICAS.INFOIMOVEL_CODIGO_REFERENCIA
    INNER JOIN RESPONSAVEL ON RESPONSAVEL.INFOIMOVEL_CODIGO_REFERENCIA = LOCALIZACAO.INFOIMOVEL_CODIGO_REFERENCIA`)
        .then(result => {
        resposta(result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários'})
    });
})
inserirRota('/criar_usuario', 
function name(dados, resposta) {
    console.log(dados);
    database(`INSERT INTO USER
    (
        NOME, 
        PASSWORD,
        ADM
    ) 
    VALUES
    (
        "${dados.user}",
        "${dados.pass}",
        "${dados.adm}"
    )`)
    .then(result => {
        resposta({message: 'USUARIO INSERIDO COM SUCESSO!'});
    }).catch(erro => {
        resposta({erro: 'ERRO AO INSERIR O USUÁRIO!'});
    });

})


