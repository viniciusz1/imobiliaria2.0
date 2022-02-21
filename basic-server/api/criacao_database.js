// database(`CREATE TABLE IF NOT EXISTS TESTE (
//     ID INTEGER PRIMARY KEY AUTOINCREMENT,
//     NOME varchar(30),
//     NUMERO int
//     )`).then(result => {
//     console.log('TABELA CRIADA')
// }).catch(erro => {
//     console.log('TABELA DEU ERRO')
// });

database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    PASSWORD varchar(30)
    )`).then(result => {
    console.log('TABELA USER CRIADA')
}).catch(erro => {
    console.log('TABELA DEU ERRO USER')
});

database(`CREATE TABLE IF NOT EXISTS INFOIMOVEL (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    VALOR_IMOVEL varchar(30),
    FINALIDADE varchar(30),
    TIPO_IMOVEL varchar(30)
    )`).then(result => {
    console.log('TABELA CRIADA INFOIMOVEL')
}).catch(erro => {
    console.log('TABELA DEU ERRO INFOIMOVEL')
});

database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    TELEFONE varchar(30),
    CPF varchar(30),
    EMAIL varchar(30),
    DATA_NASCIMENTO varchar(30)
    )`).then(result => {
    console.log('TABELA CRIADA CLIENTE')
}).catch(erro => {
    console.log('TABELA DEU ERRO CLIENTE')
});

database(`CREATE TABLE IF NOT EXISTS CARACTERISTICAS (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    DORMITORIOS varchar(30),
    SUITES varchar(30),
    BANHEIROS varchar(30),
    VAGAS_GARAGEM varchar(30),
    LAVANDERIA varchar(30),
    SACADA varchar(30),
    CHURRASQUEIRA varchar(30),
    AREA_FESTAS varchar(30)
    )`).then(result => {
    console.log('TABELA CRIADA CARACTERISTICAS')
}).catch(erro => {
    console.log('TABELA DEU ERRO CARACTERISTICAS')
});

database(`CREATE TABLE IF NOT EXISTS RESPONSAVEL (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    USER_ID INTEGER,
    PROPRIETARIO varchar(30),
    CORRETOR varchar(30),
    CLIENTE_NOME_CLIENTE INTEGER,
    FOREIGN KEY(USER_ID) REFERENCES USER(ID),
    FOREIGN KEY(CLIENTE_NOME_CLIENTE) REFERENCES CLIENTE(NOME_CLIENTE)
    )`).then(result => {
    console.log('TABELA CRIADA RESPONSAVEL')
}).catch(erro => {
    console.log('TABELA DEU ERRO RESPONSAVEL')
});

database(`CREATE TABLE IF NOT EXISTS LOCALIZACAO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    BAIRRO INTEGER,
    LOGRADOURO varchar(30),
    NUMERO varchar(30),
    COMPLEMENTO INTEGER,
    REGIAO INTEGER,
    ESTADO INTEGER,
    ZONA INTEGER,
    INFORMACOES_CODIGO_REFERENCIA INTEGER,
    FOREIGN KEY(INFORMACOES_CODIGO_REFERENCIA) REFERENCES INFORMACOES(CODIGO_REFERENCIA)
    )`).then(result => {
    console.log('TABELA CRIADA LOCALIZACAO')
}).catch(erro => {
    console.log('TABELA DEU ERRO LOCALIZACAO')
});



database(`INSERT INTO USER VALUES(
    null,
    'vinicius',
    '123'
),(null, 'thiago', '123')`).then(result => {
    console.log('insert CRIADA')
}).catch(erro => {
    console.log('TABELA DEU ERRO')
});





database(`CREATE TABLE IF NOT EXISTS INFORMACOES (
    NOME varchar(45) not null,
    TELEFONE varchar(15) not null,
    CPF INTEGER PRIMARY KEY,
    EMAIL varchar(100),
    DATA varchar(20)    
    )`).then(result => {
    console.log('Tabela informacoes criada com sucesso');
}).catch(erro => {
    console.log('Tabela informacoes com erro de criação');
});


