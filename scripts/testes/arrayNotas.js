let notas = [10, 9, 8, 5, 10, 7]
let somaProvas = 0
let quantidadeProvas = notas.length
let media = 0
let aprovado = false

console.log(notas)
console.table(notas)
console.log(notas.length)
console.log()

notas[6] = 10
console.log(notas)
console.table(notas)
console.log(notas.length)

console.log()

for (let i = 0; i < notas.length; i++) {
    somaProvas = somaProvas + notas[i] 
    console.log(somaProvas)
}
console.log(`A soma das notas é: ${somaProvas}`)

media = somaProvas / notas.length
console.log(`A média das notas é: ${media}`)

if (media >= 7){
    aprovado = true
}

if(aprovado){
    console.log("Parabéns, você passou de ano")
} else {
    console.log("Infelizmente, você não passou de ano")
}