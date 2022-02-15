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

// inserirRota('/criar_usuario',
// function name(dados, resposta) {
//     console.log(dados)

//     if(!dados.nome){
//         return resposta({erro: 'É necessário preencher o nome'})
//     }
//     if(!dados.nickname){
//         return resposta({erro: 'É necessário preencher o nome'})
//     }
//     if(!dados.password){
//         return resposta({erro: 'É necessário preencher senha '})
//     }
//     database(`INSERT INTO USER 
//     (
//         NOME, 
//         PASSWORD
//         )
//         VALUES
//         (
//         "${dados.nome}", 
//         "${dados.password}"
//         )`)
//         .then(result => {
//         console.log('Usuario inserido com sucesso!')
//         resposta({message: 'Usuario inserido com sucesso"'})
//     }).catch(erro => {
//         console.log('Usuario NÃO FOI inserido com sucesso!')
//         resposta({message: 'Usuario NÃO FOI inserido com sucesso"'})
//     });
// })

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


