let notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0];
let totalNotas = 0;
let media;
let notasAcimaMedia = 0;
let maiorNota = notas[0];
let menorNota = notas[0];

for (let i = 0; i < notas.length; i ++) {           //utilizando for para percorrer todos os itens da variável notas
    totalNotas += notas[i];                         //calculando a soma de todas as notas
    media = totalNotas / notas.length;              //calculando a media das notas
}

for (let i = 0; i < notas.length; i ++) {           //utilizando for para percorrer todos os itens da variável notas
    if (notas[i] > media) {                         //utilizando if para ver se os itens da variável notas são maiores que a media
        notasAcimaMedia ++;                         //acrescentando um número a variável notasAcimaMedia
    }

    if (notas[i] > maiorNota) {                     //if para qual dos itens da variável notas é o maior
        maiorNota = notas[i];
    }

    if (notas[i] < menorNota) {                     //if para qual dos itens da variável notas é o menor
        menorNota = notas[i];
    }
}

console.log(`A média das notas é igual a ${media}`);
console.log(`${notasAcimaMedia} alunos tiraram acima da média`);
console.log(`A maior nota é: ${maiorNota}`);
console.log(`A menor nota é: ${menorNota}`);