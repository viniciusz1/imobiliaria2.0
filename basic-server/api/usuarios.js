inserirRota('/buscar_usuario',
    function (dados, resposta) {
        console.log(dados, resposta);

        resposta({ok: "Requisição efetuada com sucesso!"});
    });

inserirRota('/criar_usuario',
function name(dados, resposta) {
    console.log(dados)

    if(!dados.nome){
        return resposta({erro: 'É necessário preencher o nome'})
    }
    if(!dados.nickname){
        return resposta({erro: 'É necessário preencher o nome'})
    }

    database(`INSERT INTO USER 
    (
        NOME, 
        NICKNAME
        )
        VALUES
        (
        "${dados.nome}", 
        "${dados.nickname}"
        )`)
        .then(result => {
        console.log('Usuario inserido com sucesso!')
        resposta({message: 'Usuario inserido com sucesso"'})
    }).catch(erro => {
        console.log('Usuario NÃO FOI inserido com sucesso!')
        resposta({message: 'Usuario NÃO FOI inserido com sucesso"'})
    });
})
