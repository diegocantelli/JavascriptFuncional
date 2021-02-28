const {
    timer,
    Subscription
} = require('rxjs');

const obs = timer(3000, 500);

//criando uma subscription para armazenar todas as subscriptions
const subLista = new Subscription();

const sub1 = obs.subscribe(num => {
    console.log(`#1 Gerou o número ${num}`)
});

const sub2 = obs.subscribe(num => {
    console.log(`#2 Gerou o número ${num}`)
});

//adicionando as subscription na subscription geral
subLista.add(sub1);
subLista.add(sub2);

//sub.unsybscribe -> ao dar unsubscribe na lista de subscription, todoas as subscriptions dentro dela
// tbm serão "desinscritas"
setTimeout(() => sub.unsubscribe(), 10000)