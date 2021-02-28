const {
    Observable
} = require("rxjs");
const {
    switchMap
} = require("rxjs/operators");

search(text$: Observable < string > ): Observable < string[] > {
    return text$.pipe(
        //Com base no observable principal, ele retorna um outro observable
        switchMap(searchTerm => {
            if (!searchTerm) {
                return []
            }
            //Observable que será retornado
            return this.getPost(searchTerm);
        })
    )
}