inserirRota('/delete_caracteristicas',
function inserir(dados, resposta) {
    console.log(dados)
    database(`DELETE FROM CARACTERISTICAS WHERE INFOIMOVEL_CODIGO_REFERENCIA = "${dados.codigo}"`)
        .then(result => {
        console.log('caracteristicas removido com sucesso!')
        resposta({message: 'caracteristicas  FOI removido com sucesso"'})
    }).catch(erro => {
        console.log('caracteristicas NÃO FOI removido com sucesso!')
        console.log(erro)
        resposta({message: 'caracteristicas NÃO FOI removido com sucesso"'})
    });
})

inserirRota('/inserir_caracteristicas',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO CARACTERISTICAS 
    (
        DORMITORIOS,
        SUITES,
        BANHEIROS,
        VAGAS_GARAGEM,
        LAVANDERIA,
        SACADA,
        CHURRASQUEIRA,
        AREA_FESTAS,
        INFOIMOVEL_CODIGO_REFERENCIA
        )
        VALUES
        (
        "${dados.dormitorios}", 
        "${dados.suites}", 
        "${dados.banheiros}",
        "${dados.vagas}",
        "${dados.lavanderia}",
        "${dados.sacada}",
        "${dados.churrasqueira}",
        "${dados.festas}",
        "${dados.codigo}"
        )`)
        .then(result => {
        console.log('caracteristicas inserido com sucesso!')
        resposta({message: 'caracteristicas inserido com sucesso'})
    }).catch(erro => {
        console.log('caracteristicas NÃO FOI inserido com sucesso!')
        console.log(erro)
        resposta({message: 'caracteristicas  NÃO FOI inserido com sucesso"'})
    });
})

inserirRota('/update_caracteristicas',
function inserir(dados, resposta) {
    console.log(dados)
    database(`UPDATE CARACTERISTICAS SET DORMITORIOS = "${dados.dormitorios}",
        SUITES = "${dados.suites}",
        BANHEIROS = "${dados.banheiros}",
        VAGAS_GARAGEM = "${dados.vagas}",
        LAVANDERIA = "${dados.lavanderia}",
        SACADA = "${dados.sacada}",
        CHURRASQUEIRA = "${dados.churrasqueira}",
        AREA_FESTAS = "${dados.festas}"
        WHERE 
        INFOIMOVEL_CODIGO_REFERENCIA = "${dados.codigo}"`)
        .then(result => {
        console.log('caracteristicas ALTERADO com sucesso!')
        resposta({message: 'caracteristicas ALTERADO com sucesso'})
    }).catch(erro => {
        console.log('caracteristicas NÃO FOI ALTERADO com sucesso!')
        console.log(erro)
        resposta({message: 'caracteristicas  NÃO FOI ALTERADO com sucesso"'})
    });
})
