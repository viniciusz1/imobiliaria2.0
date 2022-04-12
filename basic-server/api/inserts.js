database(`INSERT INTO INFOIMOVEL VALUES(
    123,
    false,
    300000,
    "Venda",
    "Apartamento",
    "1234567890",
    "https://resizedimgs.vivareal.com/crop/286x200/vr.images.sp/db054dab096c1afe7d28109d53ac9758.jpg",
    "Sobrado Legal"
),(
    321,
    false,
    400000,
    "Venda",
    "Casa",
    "11111111111",
    "https://resizedimgs.vivareal.com/crop/286x200/vr.images.sp/db054dab096c1afe7d28109d53ac9758.jpg",
    "Casa Legal"
),(
    213,
    false,
    500000,
    "Venda",
    "Geminado",
    "123432434344",
    "https://resizedimgs.vivareal.com/crop/286x200/vr.images.sp/db054dab096c1afe7d28109d53ac9758.jpg",
    "Geminado Legal"
),(
    231,
    false,
    600000,
    "Venda",
    "Apartamento",
    "1234567890",
    "https://resizedimgs.vivareal.com/crop/286x200/vr.images.sp/db054dab096c1afe7d28109d53ac9758.jpg",
    "Apartamento Legal"
)`).then(result => {
    console.log('insert INFOIMOVEL')
}).catch(erro => {
    console.log('inserção infoimovel deu ruim')
});

database(`INSERT INTO CARACTERISTICAS VALUES(
    1,
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "123"
),(
    2,
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "2",
    "321"
),(
    3,
    "3",
    "3",
    "3",
    "3",
    "3",
    "3",
    "3",
    "3",
    "213"
),(
    4,
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "4",
    "231"
)`).then(result => {
    console.log('insert INFOIMOVEL')
}).catch(erro => {
    console.log('inserção infoimovel deu ruim')
});
database(`INSERT INTO LOCALIZACAO VALUES(
    1,
    "Nova Brasília",
    "Venâcio da Silva Porto",
    "123",
    "Perto da Ponte",
    "Sul",
    "Santa Catarina",
    "Leste",
    "123",
    "Jaraguá do Sul",
    "89252-230"
),(
    2,
    "Vila Lenzi",
    "Marechal Deodora da Fonseca",
    "321",
    "Perto do Lago",
    "Sul",
    "Santa Catarina",
    "Leste",
    "321",
    "Jaraguá do Sul",
    "89252-210"
),(
    3,
    "Pomeranos",
    "João Pessoa",
    "213",
    "Perto do Rio",
    "Sul",
    "Santa Catarina",
    "Leste",
    "213",
    "Jaraguá do Sul",
    "89252-220"
),(
    4,
    "Nova Zelândia",
    "Venâcio Malta",
    "231",
    "Perto do riacho",
    "Sul",
    "Santa Catarina",
    "Leste",
    "231",
    "Jaraguá do Sul",
    "89252-240"
)`).then(result => {
    console.log('insert LOCALIZACAO')
}).catch(erro => {
    console.log('inserção LOCALIZACAO deu ruim')
});
database(`INSERT INTO RESPONSAVEL VALUES(
    "1",
    null,
    "Clóvis Benner",
    "Vinícius",
    "3893892898",
    "123"
),(
    "2",
    null,
    "Bruno Henrique",
    "Vinícius",
    "12432341",
    "321"
),(
    "3",
    null,
    "Armelindo Biterbrundos",
    "Vinícius",
    "4321432142",
    "213"
),(
    "4",
    null,
    "Jhowany",
    "Vinícius",
    "2342143214",
    "231"
)`).then(result => {
    console.log('insert RESPONSAVEL')
}).catch(erro => {
    console.log('inserção RESPONSAVEL deu ruim')
});
