let diasStorys = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
let visualizacoes = [1200, 850, 1100, 1350, 950];
let diaMaisVisualizado;
let maxVisualizacoes = visualizacoes[0];
let totalVisualizacoes = 0;
let storiesPopulares = 0;
let mediaVisualizações = 0;

console.table(diasStorys);
console.table(visualizacoes);

for (let i = 0; i < visualizacoes.length; i++) {
    if (visualizacoes[i] > maxVisualizacoes) {
        maxVisualizacoes = visualizacoes[i];
        diaMaisVisualizado = diasStorys[i];
    };
};
console.log(`${diaMaisVisualizado} foi o dia com mais visualizações, tendo ${maxVisualizacoes}`);

for (let i = 0; i < visualizacoes.length; i++) {
    totalVisualizacoes += visualizacoes[i];

    if (visualizacoes[i] > 1000) {
        storiesPopulares ++
    };
};
console.log(`O total de visualizações neste período foi de ${totalVisualizacoes}`);
console.log(`${storiesPopulares} dias tiveram mais de 1000 visualizações, sendo considerados stories populares`);

mediaVisualizações = totalVisualizacoes / visualizacoes.length;
console.log(`A media de visualizações: ${mediaVisualizações}`);