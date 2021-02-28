const {
    Observable,
    of
} = require('rxjs');

const person = {
    name: 'Diego'
}

const personObs = of (person);

personObs.subscribe(console.log);