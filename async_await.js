function esperarPor(tempo = 2000) {
    //resolve é o nome padrão da função callback da promisse, mas pode ser qualquer nome
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log('executando promise');
            //esta função tem que ser o mesmo nome definido na função passada por parâmetro dentro da promise
            resolve()
        }, tempo)
    })
}

async function retornaValor(tempo) {
    return new Promise(resolve => {
        setTimeout(() => resolve(10));
    });
}

//async -> é necessáirio para poder utilizar o await
//await -> só é possível utilizar o await dentro de uma função async
//O await tem que ser feito em cima de uma função que retorna uma promise
async function executar() {

    //irá retornar o valor 10 após 2 segundos, só após isso o restante do código será executado
    let valorPromiseAwait = await retornaValor(2000);


    //ao fazer a chamada com o await, o código console.log só é executado após 1.5 segundo
    await esperarPor(1500)
    console.log(`Executando await ${valorPromiseAwait}...`)

    //ao fazer a chamada com o await, o código console.log só é executado após 1.5 segundo
    await esperarPor(1500)
    valorPromiseAwait += 1
    console.log(`Executando await ${valorPromiseAwait}...`)

    //ao fazer a chamada com o await, o código console.log só é executado após 1.5 segundo
    await esperarPor(1500)
    valorPromiseAwait += 1
    console.log(`Executando await ${valorPromiseAwait}...`)

    return valorPromiseAwait;
}

//para pegar o retorno de uma função async fora do escopo de uma função async, não podemos
//usar o await, para pegar o retorno devemo usar o Then
executar()
    .then(v => console.log(v));