function gerarNumeros(callback) {

    return {
        iniciar(callback) {
            let num = 2;
            const interval = setInterval(() => {
                callback(num++);
            }, 1000)

            return {
                parar(interval) {
                    clearInterval(interval)
                }
            }
        }

    }
}

let temp1 = gerarNumeros();
temp1.iniciar((num) => console.log(num * 2));

let temp2 = gerarNumeros();
temp2.iniciar((num) => console.log(num + 100));