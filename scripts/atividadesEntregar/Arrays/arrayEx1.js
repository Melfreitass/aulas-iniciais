let dia = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let temperatura = [28, 31, 27, 29, 30, 32, 33];
let tempMedia = 0;
let tempMin = temperatura[0];
let tempMax = temperatura[0];
let diaMax;
let diaMin;

console.log("Temperaturas registradas:");
console.table(temperatura);

for (let i=0; i < temperatura.length; i++) {
    tempMedia += temperatura[i] / temperatura.length;
};
console.log(`A temperatura média é igual a: ${tempMedia}°C\n`);

for (let i=0; i < temperatura.length; i++) {
   if (temperatura[i] > tempMax) {
    tempMax = temperatura[i];
    diaMax = dia[i];
   }; 
}; 
console.log(`${diaMax} foi o dia com a maior temperatura, chegando a ${tempMax}°C`);

for (let i=0; i < temperatura.length; i++) {
    if (temperatura[i] < tempMin) {
        tempMin = temperatura[i];
        diaMin = dia[i];
    };
};
console.log(`${diaMin} foi o dia com menor temperatura, chegando a ${tempMin}°C`);