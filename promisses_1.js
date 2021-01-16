//cumprirPromessa -> é a operação que desejo executar assíncronamente e deve ser passada como callBack
let p = new Promise(function (cumprirPromessa) {
    //aqui no caso a função irá devolver o valor 3, mas pode ser um objeto
    cumprirPromessa(3)
});

//Com a promisse instanciada, temos acesso ao método then
//no método then é passado uma função callback e o parâmetro dela será o valor que foi resolvido na
//definição da promisse, no caso o resultado da função cumprirPromessa
p.then(valor =>
    //valor -> será 3, pois foi passado 3 na criação da promise
    console.log(valor)
);