//questão 15
num1 = 2
num2 = 7
console.log (`num1: ${num1} num2: ${num2}`)


if (num1 % 2 === 0) {
    console.log(`${num1} não é ímpar`)
} else {
    console.log(`${num1} é ímpar`)
}


if (num2 % 2 === 0) {
    console.log(`${num2} não é ímpar`)
} else {
    console.log(`${num2} é ímpar`)
}
console.log()


//questão 16
let precoProduto1 = 10.00
let quantidadeProduto1 = 500
let precoProduto2 = 9.00
let quantidadeProduto2 = 400

let precoPorUnidade1 = precoProduto1 / quantidadeProduto1
let precoPorUnidade2 = precoProduto2 / quantidadeProduto2

console.log(`Preço por grama do produto1: R$${precoPorUnidade1}`)
console.log(`Preço por grama do produto2: R$${precoPorUnidade2}`)

if(precoPorUnidade1 < precoPorUnidade2) {
    console.log(`O produto1 tem o melhor custo-benefício`)
} else if (precoPorUnidade1 > precoPorUnidade2) {
    console.log(`O ${Produto2} produto 2 tem o melhor custo-benefício`)
} else {
    console.log(`Ambos os produtos têm o mesmo custo-benefício`)
}
console.log()


//questão 17
let ladoA
let ladoB
let ladoC
let ladoD

ladoA = 10
ladoB = 5
ladoC = 10
ladoD = 5
console.log(`ladoA: ${ladoA} ladoB: ${ladoB} ladoC: ${ladoC} ladoD: ${ladoD}`)

info = ladoA + ladoB + ladoC + ladoD
console.log(`perímeto do retângulo: ${info}\n`)


//questão 18
let distancia
let velocidadeMedia

distancia = 100
velocidade = 90
console.log(`distancia: ${distancia}km velocidade: ${velocidade}km/h`)

let tempo = distancia / velocidade
console.log(`o tempo estimado é de ${tempo} hora\n`)


//questão 19 - não é possível fazer pois não foi explicado


//questão 20
let nota1 = 10
let nota2 = 7
let nota3 = 3
console.log(`As notas são: ${nota1}, ${nota2} e ${nota3}`)

if(nota1 < 2) {
    console.log(`Sua nota é F`)
} else if(nota1 < 4) {
    console.log('Sua nota é E')
} else if(nota1 < 6) {
    console.log(`Sua nota é D`)
} else if(nota1 < 8) {
    console.log(`Sua nota é C`)
} else if(nota1 < 10) {
    console.log(`Sua nota é B`)
} else {
    console.log(`Sua nota é A`)
}


if(nota2 < 2) {
    console.log(`Sua nota é F`)
} else if(nota2 < 4) {
    console.log('Sua nota é E')
} else if(nota2 < 6) {
    console.log(`Sua nota é D`)
} else if(nota2 < 8) {
    console.log(`Sua nota é C`)
} else if(nota2 < 10) {
    console.log(`Sua nota é B`)
} else {
    console.log(`Sua nota é A`)
}


if(nota3 < 2) {
    console.log(`Sua nota é F`)
} else if(nota3 < 4) {
    console.log('Sua nota é E')
} else if(nota3 < 6) {
    console.log(`Sua nota é D`)
} else if(nota3 < 8) {
    console.log(`Sua nota é C`)
} else if(nota3 < 10) {
    console.log(`Sua nota é B`)
} else {
    console.log(`Sua nota é A`)
}
console.log()


//questão 21
let num = 6
let fatorial = 1

fatorial *= num
fatorial *= num -1
fatorial *= num -2
fatorial *= num -3
fatorial *= num -4
fatorial *= num -5

console.log(`O fatorial de ${num} é ${fatorial}\n`)


//questão 22
let numero1 = 5

if (numero1 % 2 === 0) {
    console.log(`${numero1} é par`)
} else {
    console.log(`${numero1} é ímpar`)
}

numero1 = 3
if (numero1 % 2 === 0) {
    console.log(`${numero1} é par`)
} else {
    console.log(`${numero1} é ímpar`)
}

numero1 = 6
if (numero1 % 2 === 0) {
    console.log(`${numero1} é par`)
} else {
    console.log(`${numero1} é ímpar`)
}
console.log()


//questão 23 e 24 - não é possível fazer pois não foi explicado


//questão 25
let not1 = 10
let not2 = 7
let not3 = 5

let peso1 = 4   //peso é a quantidade de vezes que a mesma nota se repete
let peso2 = 2
let peso3 = 1

let mediaPonderada = (not1 * peso1) + (not2 * peso2) + (not3 * peso3)
mediaPonderada = mediaPonderada / (peso1 + peso2 + peso3)

console.log(`A média ponderada das notas é ${mediaPonderada}\n`)


//questão 26
let entrada = 7
let saida = 16
console.log(`A pessoa entrou ${entrada}h e saiu ${saida}h`)

let horasTrabalhadas = saida - entrada
console.log(`A pessoa trabalhou ${horasTrabalhadas}h\n`)

//questão 27
let valorConta = 120
let numeroPessoas = 6
console.log(`O valor da conta é R$${valorConta} e ${numeroPessoas} irão paga-la`)

let divisaoConta = valorConta / numeroPessoas
console.log(`Cada pessoa irá pagar R$${divisaoConta}\n`)


//questão 28
let dolar = 6
let real = 12

let conversao = real * dolar
console.log(`A conversão de ${real}reais para dolar é ${conversao}dólares`)


//questão 29 e 30 - não é possível fazer pois não foi explicado