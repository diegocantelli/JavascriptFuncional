const {
    observable,
    Observable
} = require("rxjs");

const request = this.getPosts();
this.setLoadingSpinner(request);

//Primeiro request feito na API
request.subscribe(data => {
    console.log(data);
    this.print(data);
})

setLoadingSpinner(observable: Observable < any > ) {
    this.loading = true;

    //Segundo request feito na API, não aproveita o primeiro request
    observable.subscribe(() => this.loading = false)
}

//Método que após o subscribe fará a consulta na api
getPosts(): Observable < Posts[] > {
    return this.http.get < Post[] > ('https://enderero.api')
        //ao utiliza o share é possível compartilhar os dados feitos pelo primeiro request
        //dessa forma a api não é chamada 2 vezes    
        .pipe(share())
}