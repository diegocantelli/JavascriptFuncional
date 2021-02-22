const {
    Observable,
    Subject
} = require('rxjs');

function getObservable() {
    return new Observable(subscribe => {
        setTimeout(() => {
            console.log('#1 Obs...');
            console.log(Math.random());
        }, 1000);
    })
}

const obs = getObservable();

//Apesar de fazerem referência à mesma observable, o código da observable é executado 2 vezes,
// gerando 2 valores diferentes
//Observable -> funciona de forma Unicast, emiindo valores diferentes para cada interessado registrado
obs.subscribe(console.log);
obs.subscribe(console.log);


function getSubject() {
    const subject = new Subject();
    setTimeout(() => {
        console.log('#2 Subject...')
        subject.next(Math.random());
        subject.complete();
    }, 1000);
    return subject;
}

//Subjet -> funciona de forma multicast, emitindo o mesmo dado para todos os interessados registrados
const sub = getSubject();
sub.subscribe(console.log);
sub.subscribe(console.log);