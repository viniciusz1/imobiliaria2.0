


inserirRota('/delete_responsavel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`DELETE FROM RESPONSAVEL WHERE INFOIMOVEL_CODIGO_REFERENCIA = "${dados.codigo}"`)
        .then(result => {
        console.log('responsavel removido com sucesso!')
        resposta({message: 'responsavel  FOI removido com sucesso"'})
    }).catch(erro => {
        console.log('responsavel NÃO FOI removido com sucesso!')
        console.log(erro)
        resposta({message: 'responsavel NÃO FOI removido com sucesso"'})
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