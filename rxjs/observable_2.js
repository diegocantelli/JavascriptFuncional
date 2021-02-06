const {
    Observable
} = require('rxjs');

const obs = Observable.create(subscriber => {
    subscriber.next('Rxjs')
    subscriber.next('É')
    subscriber.next('Bem')
    subscriber.next('Poderoso')

    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Ocorreu algum erro');
    }
})

obs.subscribe(
    msg => console.log(`Sucesso: ${msg}`),
    erro => console.log(`Erro: ${erro}`),
    complete => console.log(`Complete: ${complete}`));