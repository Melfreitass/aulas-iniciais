// Ex. 1
let primeiroNumero = 10;
let segundoNumero = 5;
let operacao = "+";

let resultado;

switch (operacao) {
    case "+" :
        resultado = primeiroNumero + segundoNumero;
        break;
        case "-":
        resultado = primeiroNumero - segundoNumero;
        break;
        case "*":
        resultado = primeiroNumero * segundoNumero;
        break;
        case "/":
        if (segundoNumero !== 0) {
            resultado = primeiroNumero / segundoNumero;
        } else {
            resultado = "Erro: divisão por zero";
        }
            break;
            default:
                resultado = "Operação inválida";
    }
 
    console.log("Resultado:", resultado);
    console.log()

//Ex. 2
let numero = 5

if (numero > 0) {
    console.log(`O número ${numero} é positivo`)
} else if (numero < 0) {
    console.log(`O número ${numero} é negativo`)
} else {
    console.log(`O número é igaul a zero`)
}
console.log()

// Ex. 3
let idade = 15

if (idade >= 16) {
    console.log(`Você pode votar!`)
} else {
    console.log(`Você não pode votar, volte quando completar 16 anos!`)
}
console.log()

// Ex. 4
let num1 = 12
let num2 = 2

if (num1 > 10 && num2 > 10) {
    console.log("Os números apresentados são maiores que 10")
} else {
    if (num1 < 5 || num2 < 5){
        console.log("Os dois números, ou um deles, são menores 10 e pelo menos um dos números é menor que 5")
    } else {
        console.log("Os dois números, ou um deles, são menores 10")
    }
}
console.log()

//Ex. 5
for (let i = 1; i <= 10; i++){
    console.log(i)
}
console.log()

// Ex. 6
let soma = 0

for (let i=1; i<=5; i++) {
    soma += i;
}
console.log(`A soma dos números de 1 a 5 é: ${soma}`)
console.log()

//Ex. 7
for (let i = 1; i <=20; i++){
    if (i % 2 === 0){
        console.log (`${i} é par`)
    }
}
console.log()

//Ex. 8
let number = 8
let result = 0

for (let i = 1; i <= 10; i++){
    result = number * i;
    console.log(`${number} x ${i} = ${result}`)
}
console.log()

//Ex. 9
for (let i = 20; i >=0; i -= 2){
    console.log(i)
}
console.log()

//Ex. 10
let i = 1
while (i <= 5) {
    console.log (i);
    i++;
}
