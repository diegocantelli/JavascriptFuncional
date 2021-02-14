//Operadores de criação
const {
    of
} = require('rxjs');

//Operadores de encadeamento -pipeable
const {
    last
} = require('rxjs/operators');

//O operador of emite seus valores um por vez
of ('1', 'teste', false)
.subscribe(valor => console.log(valor));