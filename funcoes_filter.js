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
    },
    {
        nome: 'Régua',
        qtde: 0,
        preco: 50
    }
]


const qtdMaiorQueZero = (produtos) => produtos.qtde > 0;
const getNome = (produtos) => produtos.nome;

console.log(carrinho
    .filter(qtdMaiorQueZero)
    .map(getNome)
);