// BANCO DE DADOS GLOBAL DE PRODUTOS


const produtos = [
    // BEBIDAS (101-110)
    { id: 1, codigo: "101", nome: "Coca-Cola 2L", categoria: "Bebidas", precoVarejo: 12.50, precoAtacado: 10.90, qtdAtacado: 6 },
    { id: 2, codigo: "102", nome: "Água Mineral 500ml", categoria: "Bebidas", precoVarejo: 2.50, precoAtacado: 1.80, qtdAtacado: 12 },
    { id: 3, codigo: "103", nome: "Suco Del Valle Uva 1L", categoria: "Bebidas", precoVarejo: 8.90, precoAtacado: 7.50, qtdAtacado: 6 },
    { id: 4, codigo: "104", nome: "Cerveja Heineken 330ml", categoria: "Bebidas", precoVarejo: 6.50, precoAtacado: 5.80, qtdAtacado: 24 },
    { id: 5, codigo: "105", nome: "Energético Red Bull 250ml", categoria: "Bebidas", precoVarejo: 10.00, precoAtacado: 8.50, qtdAtacado: 12 },
    { id: 6, codigo: "106", nome: "Vinho Pérgola Tinto 1L", categoria: "Bebidas", precoVarejo: 25.90, precoAtacado: 22.00, qtdAtacado: 6 },
    { id: 7, codigo: "107", nome: "Refrigerante Guaraná 2L", categoria: "Bebidas", precoVarejo: 9.50, precoAtacado: 7.90, qtdAtacado: 6 },
    { id: 8, codigo: "108", nome: "Chá Leão Ice Tea 450ml", categoria: "Bebidas", precoVarejo: 5.50, precoAtacado: 4.50, qtdAtacado: 12 },
    { id: 9, codigo: "109", nome: "Cerveja Skol Lata 350ml", categoria: "Bebidas", precoVarejo: 3.80, precoAtacado: 3.20, qtdAtacado: 15 },
    { id: 10, codigo: "110", nome: "Água de Coco 1L", categoria: "Bebidas", precoVarejo: 14.00, precoAtacado: 11.50, qtdAtacado: 6 },

    // MERCEARIA (201-210)
    { id: 11, codigo: "201", nome: "Arroz Agulhinha 5kg", categoria: "Mercearia", precoVarejo: 28.90, precoAtacado: 25.50, qtdAtacado: 3 },
    { id: 12, codigo: "202", nome: "Feijão Carioca 1kg", categoria: "Mercearia", precoVarejo: 8.50, precoAtacado: 7.20, qtdAtacado: 10 },
    { id: 13, codigo: "203", nome: "Açúcar Refinado 1kg", categoria: "Mercearia", precoVarejo: 4.90, precoAtacado: 4.20, qtdAtacado: 10 },
    { id: 14, codigo: "204", nome: "Café Pilão 500g", categoria: "Mercearia", precoVarejo: 18.50, precoAtacado: 16.90, qtdAtacado: 5 },
    { id: 15, codigo: "205", nome: "Óleo de Soja 900ml", categoria: "Mercearia", precoVarejo: 7.50, precoAtacado: 6.80, qtdAtacado: 12 },
    { id: 16, codigo: "206", nome: "Macarrão Espaguete 500g", categoria: "Mercearia", precoVarejo: 4.50, precoAtacado: 3.80, qtdAtacado: 20 },
    { id: 17, codigo: "207", nome: "Molho de Tomate Sachê", categoria: "Mercearia", precoVarejo: 2.30, precoAtacado: 1.80, qtdAtacado: 24 },
    { id: 18, codigo: "208", nome: "Leite Condensado Moça", categoria: "Mercearia", precoVarejo: 7.90, precoAtacado: 6.50, qtdAtacado: 12 },
    { id: 19, codigo: "209", nome: "Farinha de Trigo 1kg", categoria: "Mercearia", precoVarejo: 5.80, precoAtacado: 4.90, qtdAtacado: 10 },
    { id: 20, codigo: "210", nome: "Biscoito Recheado Oreo", categoria: "Mercearia", precoVarejo: 4.20, precoAtacado: 3.50, qtdAtacado: 15 },

    // LIMPEZA (301-310)
    { id: 21, codigo: "301", nome: "Detergente Ypê 500ml", categoria: "Limpeza", precoVarejo: 2.80, precoAtacado: 2.30, qtdAtacado: 12 },
    { id: 22, codigo: "302", nome: "Sabão em Pó Omo 1.6kg", categoria: "Limpeza", precoVarejo: 24.90, precoAtacado: 21.50, qtdAtacado: 4 },
    { id: 23, codigo: "303", nome: "Amaciante Downy 500ml", categoria: "Limpeza", precoVarejo: 16.90, precoAtacado: 14.50, qtdAtacado: 6 },
    { id: 24, codigo: "304", nome: "Desinfetante Pinho Sol", categoria: "Limpeza", precoVarejo: 9.80, precoAtacado: 8.20, qtdAtacado: 12 },
    { id: 25, codigo: "305", nome: "Água Sanitária 2L", categoria: "Limpeza", precoVarejo: 6.50, precoAtacado: 5.30, qtdAtacado: 6 },
    { id: 26, codigo: "306", nome: "Limpador Multiuso Veja", categoria: "Limpeza", precoVarejo: 5.90, precoAtacado: 4.80, qtdAtacado: 12 },
    { id: 27, codigo: "307", nome: "Esponja de Aço Assolan", categoria: "Limpeza", precoVarejo: 2.10, precoAtacado: 1.60, qtdAtacado: 10 },
    { id: 28, codigo: "308", nome: "Saco de Lixo 50L c/10", categoria: "Limpeza", precoVarejo: 12.00, precoAtacado: 9.90, qtdAtacado: 10 },
    { id: 29, codigo: "309", nome: "Lustra Móveis 200ml", categoria: "Limpeza", precoVarejo: 8.50, precoAtacado: 7.20, qtdAtacado: 6 },
    { id: 30, codigo: "310", nome: "Sabão em Barra Unitário", categoria: "Limpeza", precoVarejo: 3.50, precoAtacado: 2.80, qtdAtacado: 5 },

    // HIGIENE (401-410)
    { id: 31, codigo: "401", nome: "Papel Higiênico c/12", categoria: "Higiene", precoVarejo: 18.90, precoAtacado: 16.50, qtdAtacado: 4 },
    { id: 32, codigo: "402", nome: "Creme Dental Colgate", categoria: "Higiene", precoVarejo: 5.50, precoAtacado: 4.20, qtdAtacado: 12 },
    { id: 33, codigo: "403", nome: "Sabonete Dove 90g", categoria: "Higiene", precoVarejo: 4.90, precoAtacado: 3.90, qtdAtacado: 12 },
    { id: 34, codigo: "404", nome: "Shampoo Pantene 400ml", categoria: "Higiene", precoVarejo: 22.00, precoAtacado: 18.90, qtdAtacado: 6 },
    { id: 35, codigo: "405", nome: "Condicionador Pantene", categoria: "Higiene", precoVarejo: 24.50, precoAtacado: 21.00, qtdAtacado: 6 },
    { id: 36, codigo: "406", nome: "Desodorante Rexona Aero", categoria: "Higiene", precoVarejo: 15.90, precoAtacado: 13.50, qtdAtacado: 12 },
    { id: 37, codigo: "407", nome: "Fio Dental 50m", categoria: "Higiene", precoVarejo: 9.90, precoAtacado: 7.90, qtdAtacado: 6 },
    { id: 38, codigo: "408", nome: "Algodão em Disco", categoria: "Higiene", precoVarejo: 7.50, precoAtacado: 5.90, qtdAtacado: 10 },
    { id: 39, codigo: "409", nome: "Haste Flexível c/75", categoria: "Higiene", precoVarejo: 6.20, precoAtacado: 4.80, qtdAtacado: 12 },
    { id: 40, codigo: "410", nome: "Absorvente Always c/8", categoria: "Higiene", precoVarejo: 8.90, precoAtacado: 7.20, qtdAtacado: 12 },

    // HORTIFRUTI (501-510)
    { id: 41, codigo: "501", nome: "Banana Prata (kg)", categoria: "Hortifruti", precoVarejo: 6.90, precoAtacado: 5.50, qtdAtacado: 5 },
    { id: 42, codigo: "502", nome: "Maçã Gala (kg)", categoria: "Hortifruti", precoVarejo: 10.50, precoAtacado: 8.90, qtdAtacado: 5 },
    { id: 43, codigo: "503", nome: "Tomate Italiano (kg)", categoria: "Hortifruti", precoVarejo: 8.90, precoAtacado: 6.90, qtdAtacado: 10 },
    { id: 44, codigo: "504", nome: "Cebola Branca (kg)", categoria: "Hortifruti", precoVarejo: 5.50, precoAtacado: 4.20, qtdAtacado: 10 },
    { id: 45, codigo: "505", nome: "Batata Lavada (kg)", categoria: "Hortifruti", precoVarejo: 7.20, precoAtacado: 5.80, qtdAtacado: 10 },
    { id: 46, codigo: "506", nome: "Ovos Brancos c/30", categoria: "Hortifruti", precoVarejo: 22.00, precoAtacado: 19.50, qtdAtacado: 3 },
    { id: 47, codigo: "507", nome: "Alface Crespa (Unid)", categoria: "Hortifruti", precoVarejo: 3.50, precoAtacado: 2.80, qtdAtacado: 5 },
    { id: 48, codigo: "508", nome: "Laranja Pêra (kg)", categoria: "Hortifruti", precoVarejo: 4.90, precoAtacado: 3.90, qtdAtacado: 10 },
    { id: 49, codigo: "509", nome: "Cenoura (kg)", categoria: "Hortifruti", precoVarejo: 5.90, precoAtacado: 4.50, qtdAtacado: 5 },
    { id: 50, codigo: "510", nome: "Melancia Inteira", categoria: "Hortifruti", precoVarejo: 25.00, precoAtacado: 20.00, qtdAtacado: 2 }
];