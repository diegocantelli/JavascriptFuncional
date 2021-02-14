//Operadores de criação
const {
    of
} = require('rxjs');

//Operadores de encadeamento -pipeable
const {
    last
} = require('rxjs/operators');

//O operador of emite seus valores um por vez
of ('1', 'teste', false, 'último')
//Com o last é possível obter o último dado emitido pelo of
.pipe(last())
    .subscribe(valor => console.log(valor));