const calcular = function (num1) {
    return function (num2) {
        return function (fn) {
            return fn(num1, num2)
        }
    }
}

function somar(a, b) {
    return a + b;
}

let calculo = calcular(2)(3)(somar);
console.log(calculo);