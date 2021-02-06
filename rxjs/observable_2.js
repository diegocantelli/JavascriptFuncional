const {
    Observable
} = require('rxjs');

const obs = Observable.create(subscriber => {
    subscriber.next('Rxjs')
    subscriber.next('É')
    subscriber.next('Bem')
    subscriber.next('Poderoso')
    subscriber.complete()
})

obs.subscribe(msg => console.log(msg));