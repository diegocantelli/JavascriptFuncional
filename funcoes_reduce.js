const carrinho = [{
        nome: 'Caneta',
        qtde: 10,
        preco: 7.99
    },
    {
        nome: 'Lápis',
        qtde: 5,
        preco: 5
    },
    {
        nome: 'Caderno',
        qtde: 5,
        preco: 50
    }
]

const getTotalPorItem = produtos => produtos.qtde * produtos.preco;
const getTotalGeral = (a, b) => a + b;

console.log(
    carrinho
    .map(getTotalPorItem)
    .reduce(getTotalGeral, 0)
);