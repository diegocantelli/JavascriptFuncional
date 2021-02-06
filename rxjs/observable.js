const {
    Observable
} = require('rxjs');

const obs = new Observable(subscriber => {

    //next -> emite um valor que será recebido por quem estiver inscrito nesta observable
    subscriber.next('Observer');
    subscriber.next('É');
    subscriber.next('bem');
    subscriber.next('legal');

    //complete -> informa para quem estiver inscrito nesta observable que não
    // será emitido mais nenhum dado
    subscriber.complete();
});

obs.subscribe(msg => console.log(msg));