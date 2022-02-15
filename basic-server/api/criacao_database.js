


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
    console.log('TABELA CRIADA')
}).catch(erro => {
    console.log('TABELA DEU ERRO')
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
    CPF INTEGER PRIMARY KEY,
    EMAIL varchar(100),
    DATA varchar(20)
    
    )`).then(result => {
    console.log('Tabela informacoes criada com sucesso');
}).catch(erro => {
    console.log('Tabela informacoes com erro de criação');
});


