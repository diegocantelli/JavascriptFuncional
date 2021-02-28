const {
    from
} = require('rxjs');
const {
    mergeMap,
    map
} = require('rxjs/operators');

const obs1 = from([1, 2, 3, 4]);
const obs2 = from([5, 6, 7, 8]);

obs1
    .pipe(
        //mergeMap -> para cada valor do OBS1 serão emitidos todos os valores do OBS2
        mergeMap(valor1 => obs2
            .pipe(
                map(valor2 => `${valor1} => ${valor2}`)
            ))
    )
    .subscribe(console.log);