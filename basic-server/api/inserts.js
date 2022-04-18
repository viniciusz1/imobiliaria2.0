database(`INSERT INTO INFOIMOVEL VALUES(
    123,
    false,
    "300.000,00",
    "Venda",
    "Apartamento",
    "1234567890",
    "https://resizedimgs.vivareal.com/crop/286x200/vr.images.sp/db054dab096c1afe7d28109d53ac9758.jpg",
    "Sobrado Legal"
),(
    321,
    false,
    "400.000,00",
    "Venda",
    "Casa",
    "11111111111",
    "https://imobiliaria636.com.br/fotos/03234689/0323468946.jpg",
    "Casa Legal"
),(
    213,
    false,
    "500.000,00",
    "Venda",
    "Geminado",
    "123432434344",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnPerICJQ62IZrU3Vx2MU1JqBCsfoNuXE1g&usqp=CAU",
    "Geminado Legal"
),(
    231,
    false,
    "600.000,00",
    "Venda",
    "Apartamento",
    "1234567890",
    "https://blog.saluteimoveis.com/wp-content/uploads/2020/12/Apartamentos-mais-valiosos-de-Balneario-Camboriu-1.jpg",
    "Apartamento Legal"
)`).then(result => {
    console.log('insert INFOIMOVEL')
}).catch(erro => {
    console.log('inserção infoimovel deu ruim')
});

database(`INSERT INTO CLIENTE VALUES(
    "Vinícius",
    "95355-5489",
    "108.423.265-37",
    "vinicius@gmail.com",
    null,
    2019-05-05
),(
    "Thiago",
    "95355-5489",
    "302.323.245-87",
    "thiago@gmail.com",
    null,
    2019-05-05
),(
    "Henrique",
    "95355-5489",
    "133.423.245-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "João",
    "95355-5489",
    "203.333.245-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Otávio Augusto",
    "95355-5489",
    "303.323.245-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Otávio Neves",
    "95355-5489",
    "133.223.245-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Camilly Pessoty",
    "95355-5489",
    "104.423.245-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Camilly Vitória",
    "95355-5489",
    "123.443.245-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Vytor",
    "95355-5489",
    "203.423.244-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Leonardo",
    "95355-5489",
    "103.423.255-81",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Kenzo",
    "95355-5489",
    "103.423.255-17",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Matheus",
    "95355-5489",
    "103.423.241-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Eduarda",
    "95355-5489",
    "103.426.215-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Ester",
    "95355-5489",
    "103.423.145-77",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Bruna",
    "95355-5489",
    "103.421.275-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Felipe",
    "95355-5489",
    "103.413.745-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Leonardo Rafaelli",
    "95355-5489",
    "103.127.245-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Leonardo Poglia",
    "95355-5489",
    "101.473.245-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Gustavo",
    "95355-5489",
    "117.423.245-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
),(
    "Bruno Henrique",
    "95355-5489",
    "113.427.245-87",
    "henrique@gmail.com",
    null,
    2019-05-05  
)`).then(result => {
    console.log('insert cliente deu boa!')
}).catch(erro => {
    console.log('inserção cliente deu ruim')
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
