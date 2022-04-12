database(`INSERT INTO INFOIMOVEL VALUES(
    123,
    true,
    300000,
    "Venda",
    "Apartamento",
    "1234567890",
    "https://resizedimgs.vivareal.com/crop/286x200/vr.images.sp/db054dab096c1afe7d28109d53ac9758.jpg",
    "Sobrado Legal"
),(
    321,
    true,
    400000,
    "Venda",
    "Casa",
    "11111111111",
    "https://resizedimgs.vivareal.com/crop/286x200/vr.images.sp/db054dab096c1afe7d28109d53ac9758.jpg",
    "Casa Legal"
),(
    213,
    true,
    500000,
    "Venda",
    "Geminado",
    "123432434344",
    "https://resizedimgs.vivareal.com/crop/286x200/vr.images.sp/db054dab096c1afe7d28109d53ac9758.jpg",
    "Geminado Legal"
),(
    123,
    true,
    300000,
    "Venda",
    "Apartamento",
    "1234567890",
    "https://resizedimgs.vivareal.com/crop/286x200/vr.images.sp/db054dab096c1afe7d28109d53ac9758.jpg",
    "Sobrado Legal"
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
    "1",
    null,
    "Clóvis Benner",
    "Vinícius",
    "3893892898",
    "123"
),(
    "1",
    null,
    "Clóvis Benner",
    "Vinícius",
    "3893892898",
    "123"
),(
    "1",
    null,
    "Clóvis Benner",
    "Vinícius",
    "3893892898",
    "123"
)`).then(result => {
    console.log('insert RESPONSAVEL')
}).catch(erro => {
    console.log('inserção RESPONSAVEL deu ruim')
});
