const path = require('path');
const fns = require('./funcoes');

const caminho = path.join(__dirname, '..', 'projeto_1', 'legendas');

fns.lerDiretorio(caminho)
    .then(arqs => fns.filtrarPorExtensao(arqs, '.srt'))
    .then(arq => fns.lerArquivos(arq))
    .then(conteudoArquivos => conteudoArquivos.join(''))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(console.log);