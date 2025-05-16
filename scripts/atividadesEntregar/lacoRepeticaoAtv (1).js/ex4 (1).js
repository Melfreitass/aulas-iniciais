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