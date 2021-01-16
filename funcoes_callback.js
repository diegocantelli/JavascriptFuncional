function exec(fn, num1, num2) {
    fn(num1, num2);
}

let somar = (num1, num2) => console.log(num1 + num2);
let subtrair = (num1, num2) => console.log(num1 - num2);

exec(somar, 10, 20);
exec(subtrair, 20, 10);