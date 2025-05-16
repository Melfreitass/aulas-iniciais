let temperaturaCelsius = [0, 10, 20, 30, 40];
let temperaturaFarenheit = [];
let contadorTemperaturaF = 0;

for (let i = 0; i < temperaturaCelsius.length; i++) {                                   //for para percorrer todos os itens da variável temperaturaCelsius
    temperaturaFarenheit[contadorTemperaturaF] = temperaturaCelsius[i] * 9 / 5 + 32;    //atribuindo os valores do novo array na posição []
    contadorTemperaturaF ++;                                                            //adicionando um numero a contadorTemperaturaF, que sera a posição do novo array
}

console.table(temperaturaCelsius)
console.table(temperaturaFarenheit)
