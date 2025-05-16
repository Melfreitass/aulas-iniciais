//questão 1
let valor = 1000;
let ehDiaPromocao = true;
let temCartaoFidelidade = true;
let desconto = 0;

if (valor > 200) {
  desconto += 10;
  console.log(`será aplicado um desconto de ${desconto}%`);
}

if (ehDiaPromocao) {
  desconto += 15;
  console.log(`será aplicado um desconto de ${desconto}%`);
}

if (temCartaoFidelidade) {
  desconto += 5;
  console.log(`será aplicado um desconto de ${desconto}%`);
}

let valorDesconto = valor * (desconto / 100);
let valorFinal = valor - valorDesconto;

console.log(`Valor total: R$ ${valor.toFixed(2)}`);
console.log(`total do desconto: ${desconto}% (R$${valorDesconto.toFixed(2)})`);
console.log(`valor final: R$${valorFinal.toFixed(2)}\n`);


//questão 2
let idade1 = 18;
let exameTeorico = true;
let examePratico = false;

if (idade1 >= 18) {
  console.log("Você é maior de idade, passe para a próxima etapa");
  if (exameTeorico) {
    console.log("Você passou no exame teorico, passe para o próximo");
    if (examePratico) {
      console.log("Você passou no exame prático, está aprovado!\n");
    } else {
      console.log("Você reprovou no exame prático, não pode dirigir\n");
    }
  } else {
    console.log("Você reprovou, não pode dirigir\n");
  }
} else {
  console.log("Você não tem idade para dirigir\n");
}


//questão 3
let idade = 9;
let ehFeriado = true;
let temCartaoDesconto = true;
let precoIngresso;

if (idade <= 10) {
  precoIngresso = 20;
  console.log(`Ingresso para crianças R$${precoIngresso}`);
} else if (idade > 60) {
  precoIngresso = 25;
  console.log(`ingresso para idosos R$${precoIngresso}`);
} else {
  precoIngresso = 40;
  console.log(`Ingresso comum R$${precoIngresso}`);
}

if (ehFeriado) {
  let acrescimo = precoIngresso * 0.2;
  precoIngresso += acrescimo;
  console.log(
    `Foi acrescentado 20% por ser feriado: R$${acrescimo.toFixed(2)}`);
}

if (temCartaoDesconto) {
  let desconto = precoIngresso * 0.15;
  precoIngresso -= desconto;
  console.log(`Foi descontado 15% por ter o cartão: -R$${desconto.toFixed(2)}`);
}

console.log(`Preço final do ingresso: R$${precoIngresso.toFixed(2)}\n`);


//questão 4
let idade2 = 15;
let classificação = 18;
let acompanhanteResponsavel = true;
let temIngresso = false;

 if (idade2 >= classificação) {
    console.log("Você pode assistir o filme, mas mostre o seu ingresso");
    if (temIngresso){
        console.log("Você tem ingresso, pode assistir ao filme");
    } else {
        console.log("Você não pode entrar sem ingresso\n")}
  } else {
    if (acompanhanteResponsavel) {
      console.log("Você pode passar com acompanhante, mas mostre seu ingresso");
      if (temIngresso) {
        console.log("Você pode assistir o filme\n");
      } else {
        console.log("Você nao pode entrar sem ingresso\n")}
    } else {
      console.log("Você não pode assistir filme sem acompanhante\n")}
  }


//questão 5
let pontosBase = 100;
let nivelDificuldade = 3;
let completouTempoRecorde = false;
let coletouTodosItens = true;

let pontosPelaDificuldade
pontosPelaDificuldade = pontosBase * nivelDificuldade;
console.log(`Você jogou no nivel de dificuldade ${nivelDificuldade}, então seus pontos serão: ${pontosPelaDificuldade} pontos`);

if (completouTempoRecorde) {
  pontosPelaDificuldade = pontosPelaDificuldade * 2;
  console.log(`Você compeletou o jogo em tempo recorde, seus pontos serão dobrados: ${pontosPelaDificuldade} pontos`);
  if (coletouTodosItens){
    pontosPelaDificuldade = pontosPelaDificuldade +  150;
    console.log(`Você coletou todos os itens, serão acrescentados 150 pontos: ${pontosPelaDificuldade} pontos`)}
    console.log(`Você ganhou ${pontosPelaDificuldade} pontos nesta fase do jogo\n`);
  } else {
    if (coletouTodosItens){
      pontosPelaDificuldade += 150;
      console.log(`Você coletou todos os itens, serão acrescentados 150 pontos: ${pontosPelaDificuldade} pontos`);
      console.log(`Você ganhou ${pontosPelaDificuldade} pontos nesta fase do jogo\n`);
    } else {
      console.log(`Você ganhou ${pontosPelaDificuldade} pontos nesta fase do jogo\n`)}
}


//questão 6
let temperatura = 15;
let ocasiao = "festa";
let prefereEstampa = false;
let preferenciaColorida = true;
let orcamento = 90;

if (temperatura > 16){
  console.log("Você pode usar roupas mais frescas");
  switch (ocasiao) {
    case "formal":
      console.log("Você pode usar roupas mais formias (vestido, camisa social, sapato aberto formal)");
      break;
    case "festa":
      console.log("Você pode usar roupas mais elegantes (vestido brilhante, salto, camiseta elegante)");
      break;
    case "casual":
      console.log("Você pode usar roupas mais casuais (camiseta de manga curta, bermuda, chinelo)");
    default: onsole.log("Opção inválida, selecione uma opção válida");
      break;}
} else {
  console.log("Você pode usar roupas mais quentes");
  switch (ocasiao) {
    case "formal":
      console.log("Você pode usar roupas mais formias (terno, vestido longo, camisa social de manga comprida)");
      break;
    case "festa":
      console.log("Você pode usar roupas mais elegantes (vestido brilhante com jaqueta, tenis elegante, blazer)");
      break;
    case "casual":
      console.log("Você pode usar roupas mais casuais (blusa de frio, meia, calça)");
    default: onsole.log("Opção inválida, selecione uma opção válida");
      break;}
}

if (prefereEstampa){
  console.log("roupas estampadas");
}
if (preferenciaColorida){
  console.log("Roupas coloridas");
}
if (orcamento > 100){
  console.log("Roupas em lojas de alto orçamento\n");
} else {
  console.log("Roupas de lojas de baixo orçamento\n");
}


//questão 7
let valorJogo = 80;
let diasEmpréstimo = 15;
let houveAtraso = true;
let diasAtraso = 5;               
let precoPorDia = 5;             //Se houver atraso, será acrescentado 5 reais por dia
let jogoDanificado = true;      //Se o jogo foi danificado, deverá pagar por um novo
let comunicouAtraso = true;      //Se comunicou atraso pode emprestar outro livro, se não, não pode emprestar esse mês

console.log(`O jogo deve ser entregue em ${diasEmpréstimo} dias, por ${valorJogo} reais`);

if (houveAtraso){
  console.log(`Você deverá pagar ${diasAtraso *= precoPorDia} reais a mais, pois houve atraso`);
  if (comunicouAtraso) {
    console.log(`Você comunicou o atraso, então poderá emprestar outro jogo este mês`);
    console.log(`Você pagará ${diasAtraso + valorJogo} reais`);
  } else {
    console.log(`Você não comunicou o atraso, então não poderá emprestar nenhum jogo este mês`);
    console.log(`Você pagará ${diasAtraso + valorJogo} reais\n`)}
  if (jogoDanificado){
    console.log(`O jogo foi danificado, você deverá pagar o preço de um novo\n`)}
} else {
  if (jogoDanificado) {
    console.log(`O jogo foi danificado, você deverá pagar o preço de um novo\n`)}
} 


//questão 8
let materiasInteresse = "Materias de Humanas";    //Materias de Humanas ou Materias de Exatas
let horariosDisponiveis = "Tarde";
let nivelConhecimento = 5;
let prefereEstudarSozinho = false;
let prefereExplicar = true;

switch (materiasInteresse) {
  case "Materias de Exatas":
    console.log("Você é compativel para estudar no grupo de exatas");
    switch (horariosDisponiveis) {
      case "Manha":
        console.log("Seu horario é disponivel para esse grupo");
        if (nivelConhecimento >= 3){
          console.log("Seu nível de conhecimento é compatível para o grupo de exatas");
        } else {
          console.log("Seu nível e conhecimento não é compatível para o grupo de exatas")}
        break;
      case "Tarde":
        console.log("Seu horário é disponível para esse grupo");
        if (nivelConhecimento >= 3){
          console.log("Seu nível de conhecimento é compatível para o grupo de exatas");
        } else {
          console.log("Seu nível e conhecimento não é compatível para o grupo de exatas")}
        break;
      default: console.log("seu horário não é disponivel para o grupo de exatas");
        break;}
    break;
  case "Materias de Humanas":
    console.log("Você é compativel para estudar no grupo de humanas");
    switch (horariosDisponiveis) {
      case "Manha":
        console.log("seu horario é disponivel para esse grupo");
        if (nivelConhecimento >= 2){
          console.log("Seu nível de conhecimento é compatível para o grupo de humanas");
        } else {
          console.log("Seu nível e conhecimento não é compatível para o grupo de humanas")}
        break;
      case "Tarde":
        console.log("seu horário é disponível para esse grupo");
        if (nivelConhecimento >= 3){
          console.log("Seu nível de conhecimento é compatível para o grupo de humanas");
        } else {
          console.log("Seu nível e conhecimento não é compatível para o grupo de humanas")}
        break;
      default: console.log("seu horário não é disponivel para o grupo de humanas");
        break;}
    break;
    default: console.log("opção inválida, escolha uma opção válida");
    break;
    }

if (prefereExplicar){
  console.log("Você consegue explicar para outros, se o horário for compatível, recomendamos que entre no grupo\n");
}
if (prefereEstudarSozinho){
  console.log("Você prefere estudar sozinho, então não recomendamos estrar em um grupo\n")}
  

//questão 9
idade = 15;                   //A idade mínima para participar é 12
mediaEscolar = 8;             //A media escolar mínima para participar é 7
jogoEspecifico = true;        
temAutorizacao = false;
temAdvertencias = true;      //Se tiver mais de uma advertencia, não pode participar
quantAvertencias = 1;

if (idade >=  12) {
  console.log("Você tem idade para participar");
  if (mediaEscolar >= 7) {
    console.log("Você tem media nas notas para participar"); 
    if (temAdvertencias) {
      if (quantAvertencias > 1) {
        console.log("Você não pode participar, pois tem mais de uma advertência\n");
      } else {
        console.log("Você só tem uma/nenhuma advertência, então pode participar");
        if (temAutorizacao){
          console.log("Você tem autorização, então pode participar");
          if (jogoEspecifico){
            console.log("Escolha o jogo de sua preferência")}
        }else{
          console.log("Você não pode participar sem autorização\n")}}
    } else {
      console.log("Você não tem advertências, pode participar");
      if (temAutorizacao){
        console.log("Você tem autorização, então pode participar");
        if (jogoEspecifico){
          console.log("Escolha o jogo de sua preferência\n")}
      }else{
        console.log("Você não pode participar sem autorização\n")}}
  } else {
    console.log("Você não tem media em notas para participar\n")}
} else {
  console.log("Você não tem idade suficiente para participar\n")}


//questão 10
let tipoExercicio = "corrida";
let duracao = "30";
let frequenciaSemanal = 1;
let atingiuMeta = true;
let compartilhouNasRedes = true;
let recompensa = 0;

switch (tipoExercicio) {
  case "caminhada":
    recompensa += 10;
    console.log(`Você está com ${recompensa} pontos pois praticou caminhada`);
    break;
  case "corrida":
    recompensa += 20;
    console.log(`Você está com ${recompensa} pontos pois praticou corrida`);
    break;
  case "ciclismo":
    recompensa += 15;
    console.log(`Você está com ${recompensa} pontos pos praticou ciclismo`);
    break;
  default: console.log("opção inválida, escolha uma opção válida");
    break;
}

if (duracao < 15) {
  recompensa += 5;
  console.log(`Você está com ${recompensa} pontos pois correu menos de 15 minutos`);
} else if (duracao >= 15) {
  recompensa += 10;
  console.log(`Você está com ${recompensa} pontos pois correu entre 15 e 30 minutos`);
} else if (duracao > 30) {
  recompensa += 15;
  console.log(`Você está com ${recompensa} pois correu entre 31 minutos e 1 hora`);
} else if (duracao > 60) {
  console.log(`Você esta com ${recompensa} pontos pois correu mais de 1 hora`);
}

if (frequenciaSemanal >= 5){
  recompensa += 15;
  console.log(`Você está com ${recompensa} pontos pois praticou 5 ou mais dias na semana`);
} else if (frequenciaSemanal >= 2){
  recompensa += 5;
  console.log(`Você está com ${recompensa} pontos pois praticou etre 2 e 4 dias na semana`);
} else if (frequenciaSemanal = 1){
  console.log(`Você continua com ${recompensa} pontos pois só praticou 1 dia nessa semana`);
}

if (atingiuMeta){
  recompensa += 30;
  console.log(`Você atingiu a meta! Agora seus pontos são ${recompensa}`);
}
if (compartilhouNasRedes){
  recompensa += 15;
  console.log(`Você compartilhou nas suas redes sociais! agora seus pontos são ${recompensa}`);
}

console.log(`Parabéns pelos seus exercícios nessa semana!! Você conseguiu uma reconpensa de ${recompensa} pontos`);