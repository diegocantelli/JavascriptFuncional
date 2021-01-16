// let numeros = [1, 2, 3, 4];
// const dobrar = n => n * 2;

// console.log(numeros.map(dobrar));


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

const listarNomeItens = produto => produto.nome;
const calcularTotalPorItem = produto => produto.qtde * produto.preco;

console.log(carrinho.map(listarNomeItens));
console.log(carrinho.map(calcularTotalPorItem));