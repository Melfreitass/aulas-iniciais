let produtos = ["Teclado", "Mouse", "Monitor", "Gabinete", "Headset", "Mousepad"];
let precos = [120, 80, 450, 350, 200, 35];
let quantidade = [15, 25, 8, 5, 10, 30];
let precoMaisCaro = precos[0];
let precoMaisBarato = precos[0];
let produtoMaisBarato = produtos[0]; 
let protudoMaisCaro = produtos[0];
let precosPelaQuantidade = [];
let contadorPrecosQuantidade = 0;
let valorTotalEstoque = 0;
let desconto = 0;
let precosComDesconto = [];
let contadorPrecosDesconto = 0;

for (let i = 0; i <  produtos.length; i++) {
    if (precos [i] > precoMaisCaro) {
        precoMaisCaro = precos[i];
        protudoMaisCaro = produtos[i];
    }

    if (precos[i] < precoMaisBarato) {
        precoMaisBarato = precos[i];
        produtoMaisBarato = produtos[i];
    }
}

for (let i = 0; i <  produtos.length; i++) {
    precosPelaQuantidade[contadorPrecosQuantidade] = precos[i] * quantidade[i]
    contadorPrecosQuantidade++
}

for (let i = 0; i <  produtos.length; i++) {
    valorTotalEstoque += precosPelaQuantidade[i]
}

for (let i = 0; i <  produtos.length; i++) {
    precosComDesconto[i] = precos[i]
    if (quantidade[i] < 10) {
        desconto = precos[i] * 15 / 100
        precosComDesconto[i] = precos[i] - desconto 
        precosComDesconto[i] = precosComDesconto[i]
    }
}

console.log(`O produto mais caro é o ${protudoMaisCaro}, custando ${precoMaisCaro}`)
console.log(`O produto mais barato é o ${produtoMaisBarato}, custando ${precoMaisBarato}`)
console.log(`O valor total do estoque é igual a ${valorTotalEstoque}`)
console.table(produtos)
console.table(precos)
console.table(quantidade)
console.table(precosComDesconto)