inserirRota('/inserir_infoimovel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO INFOIMOVEL 
    (
        CODIGO_REFERENCIA, 
        VALOR_IMOVEL,
        FINALIDADE,
        TIPO_IMOVEL
        )
        VALUES
        (
        "${dados.id}", 
        "${dados.valorImovel}", 
        "${dados.finalidade}",
        "${dados.tipoImovel}"
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

inserirRota('/buscar_infoimovel',
    function (dados, resposta) {
        console.log(dados, resposta);

       
    database(`SELECT * FROM INFOIMOVEL`)
        .then(result => {
    resposta(result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários'})
    });
})
inserirRota('/buscar_caracteristicas',
    function (dados, resposta) {
        console.log(dados, resposta);

       
    database(`SELECT * FROM CARACTERISTICAS`)
        .then(result => {
    resposta(result)
    }).catch(erro => {
        resposta({erro: 'Erro ao buscar os usuários'})
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

inserirRota('/inserir_responsavel',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO RESPONSAVEL 
    (
        USER_ID,
        PROPRIETARIO,
        CORRETOR
        )
        VALUES
        (
        "${dados.user}",
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

inserirRota('/inserir_localizacao',
function inserir(dados, resposta) {
    console.log(dados)
    database(`INSERT INTO LOCALIZACAO 
    (
        BAIRRO,
        LOGRADOURO,
        NUMERO,
        COMPLEMENTO,
        REGIAO,
        ESTADO,
        ZONA,
        INFOIMOVEL_CODIGO_REFERENCIA
        )
        VALUES
        (
        "${dados.bairro}", 
        "${dados.logradouro}", 
        "${dados.numero}",
        "${dados.complemento}",
        "${dados.regiao}",
        "${dados.estado}",
        "${dados.zona}",
        "${dados.codigo}"

        )`)
        .then(result => {
        console.log('localizacao inserido com sucesso!')
        resposta({message: 'localizacao inserido com sucesso'})
    }).catch(erro => {
        console.log('localizacao NÃO FOI inserido com sucesso!')
        console.log(erro)
        resposta({message: 'localizacao NÃO FOI inserido com sucesso"'})
    });
})




