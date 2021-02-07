const {
    Observable
} = require("rxjs");

const entre = (min, max) => {
    return new Observable(subs => {
        for (let i = min; i < max; i++) {
            subs.next(i);
        }
        subs.complete();
    })
}

entre(2, 5)
    .subscribe(obs => console.log(obs));