let salario;

let aluguel;
let energia;
let supermercado;
let lazer;
let totalDespesas;
let saldo;

salario = 5000;
aluguel = 1200;
energia = 200;
supermercado = 1500;

totalDespesas = aluguel + energia + supermercado;
saldo = salario - totalDespesas;

if (saldo > 0) {
    console.log("Você pode curtir a festa do Figo em Valinhos com este saldo: R$ " + saldo)}
     else {
if (saldo < 0) 
    console.log("Não sobrou dinheiro para gastar na festa do figo em Valinhos :(")}