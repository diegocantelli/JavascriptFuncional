const readline = require('readline');
const {
    stdout
} = require('process');

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp);
            rl.close();
        })
    })
}

function namorada(evento) {
    console.log('N: apagar as luzes!');
    console.log('N: Fazer silêncio!');
    console.log('N: Surpresaaa!');
}

function sindico(evento) {
    console.log('S: Monitorando barulho!');
}

async function porteiro(interessados) {
    while (true) {
        //por ser assíncrono é necessário usar o await, para pegar o resultado esperado da promisse
        //que no caso é uma string
        const resp = await obterResposta('O namorado chegou? s/N/q ');

        if (resp.toLowerCase() === 's') {
            interessados.forEach(obs => obs());
        } else if (resp.toLowerCase() === 'q') {
            break;
        }
    }
}

//namorada e sindico são os observadores/observers
//porteira é o observado/subject/observable
porteiro([namorada, sindico]);

// obterResposta('Esse é um teste?')
//     .then(console.log);