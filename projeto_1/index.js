const path = require('path');
const fns = require('./funcoes');

const caminho = path.join(__dirname, '..', 'projeto_1', 'legendas');

const simbolos = ['.', '?', '-', '"', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'];

fns.lerDiretorio(caminho)
    .then(arqs => fns.filtrarPorExtensao(arqs, '.srt'))
    .then(arq => fns.lerArquivos(arq))

    //junta o conteúdo dos arquivos em uma linha só
    //Join retorna uma string
    .then(conteudoArquivos => conteudoArquivos.join(''))

    //separa o conteúdo das linhas que foram juntados em uma só com base no \n
    //será retornado um array com todas as ocorrências
    .then(todoConteudo => todoConteudo.split('\n'))

    //remove as linhas em branco
    .then(arrayPorQubraDeLinha => fns.removerSeVazio(arrayPorQubraDeLinha))
    .then(arrayLinhasComTimeLine => fns.removeLinhaComTimeLine(arrayLinhasComTimeLine))
    .then(arrayLinhasComNumeros => fns.removerSeApenasNumero(arrayLinhasComNumeros))
    .then(fns.removerSimbolos(simbolos))
    .then(console.log);