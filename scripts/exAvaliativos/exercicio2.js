let numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27];
let numerosPares = 0;
let numerosImpares = 0;
let numerosMaiores20 = 0;

for (let i = 0; i < numeros.length; i++){             //usando for para percorrer todos os itens da variável numeros
    if (numeros[i] % 2 === 0) {                       //usando if para ver se o resto da divisão é 0
        numerosPares ++;                              //acrescentando um número a variável numerosPares
    } else {                                          //usando else para se o resto da divisão não for igual a 0
        numerosImpares ++;                             //acrescentando um número a variável numerosImpares
    }
}
console.log(`${numerosPares} números são pares`);
console.log(`${numerosImpares} números são ímpares`);