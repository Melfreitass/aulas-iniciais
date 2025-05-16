const nomeAplicativos = [
    "TikTok", 
    "Instagram", 
    "WhatsApp", 
    "Snapchat", 
    "Spotify", 
    "Netflix", 
    "YouTube", 
    "VSCO", 
    "BeReal", 
    "Uber"
];

const downloads = [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7]; //em milhões
const avaliacoes = [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1]; //de 1 a 5 estrelas
const categorias = [
    "Social", 
    "Social", 
    "Comunicação", 
    "Social", 
    "Música", 
    "Streaming", 
    "Vídeo", 
    "Foto", 
    "Social", 
    "Transporte"
];

let maiorNumeroDowloads = downloads[0];
let categoriaMaiorDowloads = categorias[0];
let aplicativoMaiorDowloads = nomeAplicativos[0];
let somaTotalDownloads = 0;
let mediaDownloads = 0;
let somaTotalDownloadsSocial = 0;

let maiorAvaliacao = avaliacoes[0];
let aplicativoMaiorAvaliacao = nomeAplicativos[0];
let categoriaMaiorAvaliacao = categorias[0];

let novoArray = [];
let contadorNovoArray = 0

let categoriaComMaisAplicativos = "";
let maiorContagem = 0;

for (let i = 0; i < nomeAplicativos.length; i++) {
    if (downloads[i] > maiorNumeroDowloads) {
        maiorNumeroDowloads = downloads[i];
        categoriaMaiorDowloads = categorias[i];
        aplicativoMaiorDowloads = nomeAplicativos[i];
    }

    if (avaliacoes[i] > maiorAvaliacao) {
        maiorAvaliacao = avaliacoes[i];
        categoriaMaiorAvaliacao = categorias[i];
        aplicativoMaiorAvaliacao = nomeAplicativos[i];
    }

    somaTotalDownloads += downloads[i];

    if (avaliacoes[i] > 4.5) {
        novoArray[contadorNovoArray] = nomeAplicativos[i];
        contadorNovoArray ++;
    }

    if (categorias[i] === "Social") {
        somaTotalDownloadsSocial += downloads[i];
    };
};

let contadorCategorias = {}
for (let categoria in contadorCategorias) {
    if (contadorCategorias[categoria] > maiorContagem) {
        maiorContagem = contadorCategorias[categoria];
        categoriaComMaisAplicativos = categoria;
    }
}

mediaDownloads = somaTotalDownloads / downloads.length;

console.log(`O aplicativo com maior número de downloads é: ${aplicativoMaiorDowloads}, 
com a categoria: ${categoriaMaiorDowloads}, e ${maiorNumeroDowloads} downloads\n`);

console.log(`O aplicativo com maior avaliação é: ${aplicativoMaiorAvaliacao}, 
com a categoria: ${categoriaMaiorAvaliacao}, e com ${maiorAvaliacao} estrelas\n`);

console.log(`A média de downloads dos aplicativos é: ${mediaDownloads}\n`);

console.log(`Os aplicativos com mais que 4.5 estrelas de avaliações são: ${novoArray}\n`);

console.log(`O total de downloads da categoria social é: ${somaTotalDownloadsSocial}`)

//console.table(nomeAplicativos);
//console.table(downloads); 
//console.table(avaliacoes);
//console.table(categorias);