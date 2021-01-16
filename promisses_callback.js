//exemplo de callback hell
//as callback são executadas na ordem, 1 -> 2 -> 3

// setTimeout(() => {
//     console.log('executando callback 1')
//     setTimeout(() => {
//         console.log('executando callback 2');
//         setTimeout(() => console.log('executando callback 3'), 2000);
//     }, 2000);
// }, 2000);



//resolvendo o problema de callback hell com promise

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

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)

//then(msg) -> existe o parâmetro msg pois na função resolve é devolvida uma string
// esperarPor(2000).then(msg => console.log(msg));