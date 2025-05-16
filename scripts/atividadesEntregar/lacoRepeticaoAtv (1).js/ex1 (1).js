let primeiroNumero = 10;
let segundoNumero = 5;
let operacao = "+";

let resultado;

switch (operacao) {
    case "+" :
        resultado = primeiroNumero + segundoNumero;
        break;
        case "-":
        resultado = primeiroNumero - segundoNumero;
        break;
        case "*":
        resultado = primeiroNumero * segundoNumero;
        break;
        case "/":
        if (segundoNumero !== 0) {
            resultado = primeiroNumero / segundoNumero;
        } else {
            resultado = "Erro: divisão por zero";
        }
            break;
            default:
                resultado = "Operação inválida";
    }
 
    console.log("Resultado:", resultado);