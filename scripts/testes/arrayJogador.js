let nomes = ["melissa", "nathalia", "manuela", "felipa", "marcela"];
let gastos = [25, 75, 30, 55, 45];
let gastoTotal = 0;
let gastoMedio = 0;
let diferenca;

console.table(gastos);
console.log(`${gastos.length}\n`);

console.log("somando:")
for (let i = 0; i < gastos.length; i ++) {
    gastoTotal = gastoTotal + gastos[i];
    console.log(gastoTotal);
}
console.log(`\nOs gastos totais de todos os jogadores foi de: ${gastoTotal}`);

gastoMedio = gastoTotal / gastos.length;
console.log(`A média dos gastos é igual a: ${gastoMedio}\n`);

console.log(`Comparando os valores gastos com a média:`);
for (let i = 0; i < gastos.length; i ++) {
    diferenca = gastos[i] - gastoMedio;
    if(diferenca > 0) {
        console.log(`${nomes[i]} gastou R$ ${diferenca.toFixed(2)} acima da média`);
    } else if (diferenca < 0) {
        console.log(`${nomes[i]} gastou R$ ${Math.abs(diferenca).toFixed} abaixo da média`)
    } else {
        console.log(`${nomes[i]} gastou exatamente o mesmo que a média`)
    }
}