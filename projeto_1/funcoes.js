const path = require('path');
const fs = require('fs');
const {
    rejects
} = require('assert');


function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho);
            const caminhoArquivos = arquivos.map(arq => path.join(caminho, arq))
            resolve(caminhoArquivos);
        } catch (e) {
            reject(e)
        }
    })
}

function filtrarPorExtensao(arquivos, extensaoFiltro) {
    return arquivos.filter(arq => arq.endsWith(extensaoFiltro))
}

//Lê o conteúdo dos arquivos com base no caminho passado e retorna uma promise
function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, {
                encoding: 'utf-8'
            })
            resolve(conteudo.toString())
        } catch (e) {
            reject(e)
        }
    })
}

//recebe um array de caminho
//este array de caminhos é transformado através do método map
//para cada caminho transformado no método map é chamada a função lerArquivo, que retorna uma promisse
//O Promisse.all irá resolver todas as promisses retornadas pelo map
function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function removeLinhaComTimeLine(array) {
    return array.filter(el => !el.includes('-->'))
}

function removerSeVazio(array) {
    //ao usar o trim, caso o conteúdo da string seja vazio, irá converter para falso, logo não
    //serão retornadas pelo filter, que só retorna os casos true
    return array.filter(el => el.trim())
}

function removerSeApenasNumero(array) {
    array.filter(el => {
        //se o conteúdo da linha sem os espaços convertido para inteiro resultar em um número válido
        // então num será igual a ele mesmo
        //se o conteúdo da linha sem os espaços convertido para inteiro NÂO resultar em um número válido(NaN)
        // então num será diferente de num, pois NaN nunca é igual a ele mesmo
        const num = parseInt(el.trim());
        return num !== num;
    })
}
module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    removerSeVazio,
    removeLinhaComTimeLine,
    removerSeApenasNumero,
    filtrarPorExtensao
}