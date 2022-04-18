
database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    PASSWORD varchar(30),
    ADM boolean
    )`).then(result => {
    console.log('TABELA USER CRIADA')
}).catch(erro => {
    console.log('TABELA DEU ERRO USER')
});

database(`CREATE TABLE IF NOT EXISTS VENDIDOS (
    CODIGO_IMOVEL INT NOT NULL,
    CODIGO_USUARIO INT NOT NULL,
    FOREIGN KEY(CODIGO_IMOVEL) REFERENCES INFOIMOVEL(CODIGO_REFERENCIA) on delete cascade on update cascade,
    FOREIGN KEY(CODIGO_USUARIO) REFERENCES USER(ID) on delete cascade on update cascade 
    )`).then(result => {
    console.log('TABELA VENDIDOS CRIADA')
}).catch(erro => {
    console.log('TABELA DEU ERRO VENDIDOS')
});

database(`CREATE TABLE IF NOT EXISTS INFOIMOVEL (
    CODIGO_REFERENCIA int unique,
    VENDIDO boolean NOT NULL,
    VALOR_IMOVEL int,
    FINALIDADE varchar(30),
    TIPO_IMOVEL varchar(30),
    RESPONSAVEL_CPF INTEGER,
    IMAGEM varchar(999999999999999),
    DESCRICAO varchar(999999),
    FOREIGN KEY(RESPONSAVEL_CPF) REFERENCES RESPONSAVEL(CPF) on delete cascade on update cascade 
    )`).then(result => {
    console.log('TABELA CRIADA INFOIMOVEL')
}).catch(erro => {
    console.log('TABELA DEU ERRO INFOIMOVEL')
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
    AREA_FESTAS varchar(30),
    INFOIMOVEL_CODIGO_REFERENCIA int,
    FOREIGN KEY(INFOIMOVEL_CODIGO_REFERENCIA) REFERENCES INFOIMOVEL(CODIGO_REFERENCIA) on delete cascade on update cascade 
    )`).then(result => {
    console.log('TABELA CRIADA CARACTERISTICAS')
}).catch(erro => {
    console.log('TABELA DEU ERRO CARACTERISTICAS')
});

database(`CREATE TABLE IF NOT EXISTS RESPONSAVEL (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    ID_USER INTEGER,
    PROPRIETARIO varchar(30),
    CORRETOR varchar(30),
    CLIENTE_CPF INTEGER,
    INFOIMOVEL_CODIGO_REFERENCIA INTEGER,
    FOREIGN KEY(INFOIMOVEL_CODIGO_REFERENCIA) REFERENCES INFOIMOVEL(CODIGO_REFERENCIA) on delete cascade on update cascade ,
    FOREIGN KEY(CLIENTE_CPF) REFERENCES CLIENTE(CPF) on delete cascade on update cascade 
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
    INFOIMOVEL_CODIGO_REFERENCIA int,
    CIDADE varchar(45),
    CEP varchar(24),
    FOREIGN KEY(INFOIMOVEL_CODIGO_REFERENCIA) REFERENCES INFOIMOVEL(CODIGO_REFERENCIA) on delete cascade on update cascade 
    )`).then(result => {
    console.log('TABELA CRIADA LOCALIZACAO')
}).catch(erro => {
    console.log('TABELA DEU ERRO LOCALIZACAO')
});



database(`INSERT INTO USER VALUES(
    null,
    'vinicius',
    '123',
    true
)`).then(result => {
    console.log('insert CRIADA')
}).catch(erro => {
    console.log('inserção deu erro')
});




// CLIENTES
database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    NOME varchar(45) not null,
    TELEFONE varchar(15) not null,
    CPF varchar(16) PRIMARY KEY UNIQUE,
    EMAIL varchar(100),
    IMAGEM varchar(99999999),    
    DATA varchar(30)
    )`).then(result => {
    console.log('Tabela CLIENTE criada com sucesso');
}).catch(erro => {
    console.log('Tabela CLIENTE com erro de criação');
});


