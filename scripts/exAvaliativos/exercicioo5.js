let precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
let desconto = 0;
let precosDesconto = [];
let contadorPrecosDesconto = 0;
let somaPrecosTotais = 0;
let somaPrecosDesconto = 0;
let mediaPrecosDesconto = 0;
let diferencaPrecos = 0;

for (let i = 0; i > precos.length; i++) {
    precosDesconto[i] = precos[i]
    if (precos[i] > 100) {
        desconto = precos[i] * 10 / 100
        precosDesconto[i] = precos[i] - desconto
        precosDesconto[i] = precosDesconto[i]
    }
}

console.log(precos)
console.table(precosDesconto)