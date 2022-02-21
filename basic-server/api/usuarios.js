// inserirRota('/login',
//     function (dados, resposta) {
//         console.log(dados, resposta);

       
// //     database(`SELECT * FROM USER WHERE NICKNAME = "${dados.nickname}" AND PASSWORD = "${dados.password}" LIMIT 1`)
// //         .then(result => {
// //             console.log('result:', result);
// //         resposta({user: result[0]})
// //     }).catch(erro => {
// //         resposta({erro: 'Erro ao buscar os usuários!'})
// //     });
// // })

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

inserirRota('/buscar_informacoes',
    function (dados, resposta) {
        console.log(dados, resposta);

       
    database(`SELECT * FROM INFORMACOES`)
        .then(result => {
        resposta( result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários'})
    });
})


inserirRota('/inserir_cliente',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO INFORMACOES 
    (
        NOME, 
        TELEFONE,
        CPF,
        EMAIL,
        DATA
        )
        VALUES
        (
        "${dados.nome}", 
        "${dados.telefone}", 
        "${dados.cpf}",
        "${dados.email}",
        "${dados.data}"
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

// inserirRota('/criar_usuario', 
// function name(dados, resposta) {
//     console.log(dados);

//     if(!dados.nome){
//         return resposta({erro:'É necessário preencher o nome"'})
//     }
//     if(!dados.nickname){
//         return resposta({erro:'É necessário preencher o nickname"'})
//     }
//     if(!dados.password){
//         return resposta({erro:'É necessário preencher a senha!'})
//     }

//     database(`INSERT INTO USER
//     (
//         NOME, 
//         NICKNAME,
//         PASSWORD
//     ) 
//     VALUES
//     (
//         "${dados.nome}",
//         "${dados.nickname}",
//         "${dados.password}"
//     )`)
//     .then(result => {
//         resposta({message: 'USUARIO INSERIDO COM SUCESSO!'});
//     }).catch(erro => {
//         resposta({erro: 'ERRO AO INSERIR O USUÁRIO!'});
//     });

// })


