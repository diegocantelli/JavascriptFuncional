const carrinho = [{
        nome: 'Caneta',
        qtde: 10,
        preco: 7.99,
        fragil: true
    },
    {
        nome: 'Lápis',
        qtde: 3,
        preco: 5.82,
        fragil: false
    },
    {
        nome: 'Caderno',
        qtde: 4,
        preco: 27.10,
        fragil: false
    },
    {
        nome: 'impressora',
        qtde: 1,
        preco: 649.50,
        fragil: true
    },
    {
        nome: 'Tesoura',
        qtde: 1,
        preco: 19.20,
        fragil: true
    }
]

let produtos = carrinho
    .filter(p => p.fragil)
    .map(p => p.qtde * p.preco)
    .reduce((acc, el) => {
        //acc -> no caso é um objeto com as propriedades: qtde, total e media, que foi definido no último
        //       parâmetro da função, poderia ser apenas um número 0 no lugar de um objeto
        //       e inicia com o seus valores zerados, será tratada como uma variável acumuladora
        //el -> traz o valor da função map, que no caso é a qtde * preco
        //console.log(acc, el);
        const novaQtde = acc.qtde + 1;
        const novoTotal = acc.total + el;

        //como será retornado o resultado
        return {
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal / novaQtde
        }
    }, {
        qtde: 0,
        total: 0,
        media: 0
    })

console.log(produtos);