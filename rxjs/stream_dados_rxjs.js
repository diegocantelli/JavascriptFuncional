const {
    interval
} = require('rxjs');

//gerarNumeros -> virou uma observable que irá emitir valores de meio em meio segundo
//interval -> emite uma sequência de valores de acordo com o período especificado
const gerarNumeros = interval(500);

//subscription -> retorna o "id" da observable, através desse id é possível
// interromper o processamento do stream de dados
const subscription = gerarNumeros.subscribe(num => console.log(num));

//unsubscribe -> método que cancela a emissão de dados pela observable
setTimeout(() => subscription.unsubscribe(), 5000);