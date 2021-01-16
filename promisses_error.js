function funcionarOuNao(valor, chanceErro) {
    //resolve -> é a primeira função callback da promise, e irá devolver um valor em caso de sucesso
    //reject -> é a segunda função callback da promise, e irá devolver um erro em caso de erro
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor);
        }
    })
}

//é possível realizar tratamento de erros de forma específica para cada Then
//assim como é possível realizar um tratamento de erros geral, através do catch
funcionarOuNao('Testando...', 0.9)
    .then(
        v => `Valor retornado ${v}`,
        () => console.log('Ocorreu um erro específico para este Then')
    )
    .then(v => console.log(v))
    .catch(msg => console.log(msg));