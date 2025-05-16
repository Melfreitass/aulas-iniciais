let precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
let desconto = 0;
let precosDesconto = [];
let contadorPrecosDesconto = 0;
let somaPrecosTotais = 0;
let somaPrecosDesconto = 0;
let mediaPrecosDesconto = 0;
let diferencaPrecos = 0;

for (let i = 0; i < precos.length; i++) {                                                 
    desconto = precos[i] / 10;
    if (precos[i])
    precosDesconto[contadorPrecosDesconto] = precos[i] - desconto;
    contadorPrecosDesconto++;
}

for (let i = 0; i < precos.length; i++) {
    somaPrecosTotais += precos[i];
    somaPrecosDesconto += precosDesconto[i];

    diferencaPrecos = somaPrecosTotais - somaPrecosDesconto

    mediaPrecosDesconto = somaPrecosDesconto / precosDesconto.length
}


console.log(`A loja vai perder  R$ ${diferencaPrecos.toFixed(2)} com os descontos`)
console.log(`O valor médio dos produtos após o desconto é de: R$ ${mediaPrecosDesconto.toFixed(2)}`)