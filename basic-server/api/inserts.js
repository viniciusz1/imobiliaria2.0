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
    "https://pps.whatsapp.net/v/t61.24694-24/178808345_2983340488551499_7326992364066034796_n.jpg?ccb=11-4&oh=5d058b320d03764b7266ac5dd99ccc89&oe=626BD84F",
    2019-05-05
),(
    "Thiago",
    "95355-5489",
    "302.323.245-87",
    "thiago@gmail.com",
    "https://lh3.googleusercontent.com/a-/AOh14GgT3bxprX7vKeYgQUlz7zbLrqOYpylo_Fg_lI2_nw=s32-c",
    2019-05-05
),(
    "Henrique",
    "95355-5489",
    "133.423.245-87",
    "henrique@gmail.com",
    "https://lh3.googleusercontent.com/a-/AOh14GjsHk-XyGylNpzWSAjZfcV87HbquIq-UnqemkkjSQ=s32-c",
    2019-05-05  
),(
    "João",
    "95355-5489",
    "203.333.245-87",
    "henrique@gmail.com",
    "https://pps.whatsapp.net/v/t61.24694-24/260922947_1825204034345060_6949822982634661238_n.jpg?ccb=11-4&oh=3a9c371899737d6ad49134dc3252fbd8&oe=626DFD6E",
    2019-05-05  
),(
    "Diego",
    "95355-5489",
    "222.333.245-87",
    "henrique@gmail.com",
    "https://lh3.googleusercontent.com/a-/AOh14Ggf1JXM-FMIua_IuQFG4sNNpdbk43GiNpJgAyxG=s32-c",
    2019-05-05  
),(
    "Otávio Augusto",
    "95355-5489",
    "303.323.245-87",
    "henrique@gmail.com",
    "https://lh3.googleusercontent.com/a-/AOh14Ggh6gGaDw0y94mek_IpkWI41GJibG7vOUUp2vwp=s32-c",
    2019-05-05  
),(
    "Otávio Neves",
    "95355-5489",
    "133.223.245-87",
    "henrique@gmail.com",
    "https://pps.whatsapp.net/v/t61.24694-24/185051966_202733028332894_7076629198708775680_n.jpg?ccb=11-4&oh=cd95462feb209ad375678c038cb840cd&oe=626E8CF9",
    2019-05-05  
),(
    "Camilly Pessoty",
    "95355-5489",
    "104.423.245-87",
    "henrique@gmail.com",
    "https://pps.whatsapp.net/v/t61.24694-24/233395459_1300280947143453_886180543505870274_n.jpg?ccb=11-4&oh=01_AVz-DbyVp2UlxMcebgojF34sJNj8bgk4ctv0XHDX2rDA7w&oe=626C9E18",
    2019-05-05  
),(
    "Camilly Vitória",
    "95355-5489",
    "123.443.245-87",
    "henrique@gmail.com",
    "https://pps.whatsapp.net/v/t61.24694-24/158135148_1107535780096864_8095936128135052549_n.jpg?ccb=11-4&oh=8b7940bfbb456d4a00526261ad3b7a5f&oe=626D0B87",
    2019-05-05  
),(
    "Vytor",
    "95355-5489",
    "203.423.244-87",
    "henrique@gmail.com",
    "https://www.infoescola.com/wp-content/uploads/2008/07/sapo-561077704.jpg",
    2019-05-05  
),(
    "Kenzo",
    "95355-5489",
    "103.423.255-17",
    "henrique@gmail.com",
    "https://atacadominasdepresentes.com.br/media/catalog/product/cache/1/thumbnail/1200x1400/9df78eab33525d08d6e5fb8d27136e95/b/b/bbl1465s_2_.jpg",
    2019-05-05  
),(
    "Matheus",
    "95355-5489",
    "103.423.241-87",
    "henrique@gmail.com",
    "https://lh3.googleusercontent.com/a-/AOh14GgT3bxprX7vKeYgQUlz7zbLrqOYpylo_Fg_lI2_nw=s32-c",
    2019-05-05  
),(
    "Eduarda",
    "95355-5489",
    "103.426.215-87",
    "henrique@gmail.com",
    "https://lh3.googleusercontent.com/a-/AOh14GgGoManoO--jKaCDDwezTynuXkSIvFdjbpjjL4B=s32-c",
    2019-05-05  
),(
    "Ester",
    "95355-5489",
    "103.423.145-77",
    "henrique@gmail.com",
    "https://lh3.googleusercontent.com/a-/AOh14GgHXCEmwlXREO6GJe5pOEHMWkpqJeLd_d2aPQaX=s32-c",
    2019-05-05  
),(
    "Bruna",
    "95355-5489",
    "103.421.275-87",
    "henrique@gmail.com",
    "https://pps.whatsapp.net/v/t61.24694-24/217590065_1155376751968460_2490540237114280095_n.jpg?ccb=11-4&oh=01_AVwBtvmuOVZVPF6kISxPaXtUPz5_B04IvVe9_oqrZHYYiQ&oe=626E9679",
    2019-05-05  
),(
    "Felipe",
    "95355-5489",
    "103.413.745-87",
    "henrique@gmail.com",
    "https://atacadominasdepresentes.com.br/media/catalog/product/cache/1/thumbnail/1200x1400/9df78eab33525d08d6e5fb8d27136e95/b/b/bbl1465s_2_.jpg",
    2019-05-05  
),(
    "Leonardo Rafaelli",
    "95355-5489",
    "103.127.245-87",
    "henrique@gmail.com",
    "https://lh3.googleusercontent.com/a-/AOh14Gji8MN4kF_6zp7E4lstYFWole5QuAmUn5qeLV2Q=s32-c",
    2019-05-05  
),(
    "Leonardo Poglia",
    "95355-5489",
    "101.473.245-87",
    "henrique@gmail.com",
    "https://lh3.googleusercontent.com/a-/AOh14GhEDFTEL04yo0wkq0yBP5DFjrbQBL6gnyQR5XnU=s32-c",
    2019-05-05  
),(
    "Gustavo",
    "95355-5489",
    "117.423.245-87",
    "henrique@gmail.com",
    "https://lh3.googleusercontent.com/a-/AOh14GjPV2qp9W5vMdk92vQhSkrxoE-MMRhQlecJIX-h=s32-c",
    2019-05-05  
),(
    "Bruno Henrique",
    "95355-5489",
    "113.427.245-87",
    "henrique@gmail.com",
    "https://avatars.githubusercontent.com/u/19558449?v=4",
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
