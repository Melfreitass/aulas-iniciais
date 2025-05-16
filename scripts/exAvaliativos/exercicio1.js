let idade = [17, 21, 16, 25, 19];
let maioresDeIdade = 0;
let menoresDeIdade = 0;

for (let i = 0; i < idade.length; i++) {        //usando for para percorrer todas os itens da variável idade
    if (idade[i] >= 18) {                       //usando if para verificar se a idade é maior que 18
        maioresDeIdade ++;                      //acrescentando um numero a variável maioresDeIdade
    } else {                                    //usando else para verificar se a idade é menor que 18
        menoresDeIdade ++;                      //acrescentando um numero a variável menoresDeIdade
    }
}
console.log(`${maioresDeIdade} pessoas são maiores de idaede`);
console.log(`${menoresDeIdade} pessoas são menores de idaede`);