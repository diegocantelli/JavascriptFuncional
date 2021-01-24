//São funções que podem ser passadas como parâmetros de outras funções
// ou podem ser retornadas por outras funções
let somar = (valores) => valores.reduce((a, b) => a + b, 0);

function calcular(somar, ...valores) {
    somar(valores);
}