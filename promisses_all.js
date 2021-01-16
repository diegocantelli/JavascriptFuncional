function gerarNumerosEntre(min, max, tempo) {
    if (min > max)[min, max] = [max, min];

    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        }, tempo)
    })
}

function gerarNumerosAleatorios() {
    //Promise.all -> irá disponibilizar os valores no Then após todos as promises terem sido resolvidas
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ]);
}

//neste caso irá demorar 4 segundos, pois é a promise que demora mais tempo para retornar
gerarNumerosAleatorios()
    .then(valores => console.log(valores));