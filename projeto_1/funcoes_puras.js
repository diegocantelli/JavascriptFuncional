// Uma função pura é uma uma função em que o seu retorno é definido APENAS
// por seus valores de entrada, SEM EFEITOS COLATERAIS OBSERVÁVEIS

const PI = 3.14;

//Trata-se de uma função IMPURA, pois depende de uma constante externa à prórpia
// função
function areaCirc(raio) {
    return raio * raio * PI;
}

//Função pura, pois dados os mesmos valores de entrada, teremos o mesmo retorno 
function areaCircPura(raio, pi) {
    return raio * raio * pi;
}