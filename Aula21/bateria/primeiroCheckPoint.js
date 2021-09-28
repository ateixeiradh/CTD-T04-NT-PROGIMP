function verificaSenha(senha)
{
    let senhaCorreta = "1234";
    if(senha === senhaCorreta)
    {
        console.log("ACESSO PERMITIDO");
    }else{
        console.log("ACESSO NEGADO");
    }
}

function verificaNumeros(numA, numB){
    if (numA > numB){
        console.log("O número ", numA, "é maior do que o número ", numB);
    } else if (numA < numB){
        console.log("O número ", numA, " é menor do que o número ", numB);
    } else if (numA == numB) {
        console.log("Os dois números são iguais");
    } else {
        console.log("Número digitado não é válido");
    }
}

verificaSenha(4343);

let mesesDoAno = 12;

switch(mesesDoAno)
{
    case 1:
        console.log("Janeiro");
        break;

    case 2:
        console.log("Fevereiro");
        break;

     case 3:
         console.log("Março");
          break;

     case 4:
        console.log("Abril");
        break;

     case 5:
         console.log("Maio");
         break;

     case 6:
        console.log("Junho");
        break;

    case 7:
        console.log("Julho");
        break;

     case 8:
         console.log("Agosto");
          break;

     case 9:
        console.log("Setembro");
        break;

     case 10:
         console.log("Outubro");
         break;

     case 11:
        console.log("Novembro");
        break;

    case 12:
         console.log("Dezembro");
         break;

    default:
    {
        console.log("O mês digitado não é válido");
        break;
    }

            
}

function verificaSenha2(senha) {
    senha === 1234 ? console.log("Acesso permitido") : console.log("Acesso negado")

}

verificaSenha2(1234)


/* As proximas linhas refere-se ao Exercicio do MicroOndas */


console.log("Escolha uma das opções abaixo:\n",
"1 - Pipoca – 10 segundos (padrão)\n",
"2 - Macarrão – 8 segundos (padrão)\n",
"3 - Carne – 15 segundos (padrão)\n",
"4 - Feijão – 12 segundos (padrão)\n",
"5 - Brigadeiro – 8 segundos (padrão)");


let menu = 5;
var tempoPadraoAlimento;
var tempoQueUsuarioEscolhe = 10;

switch(menu)
{
    case 1:
        tempoPadraoAlimento = 10;
        microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
        break;

    case 2:
        tempoPadraoAlimento = 8;
        microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
        break;

    case 3:
        tempoPadraoAlimento = 15;
        microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
        break;

    case 4:
        tempoPadraoAlimento = 12;
        microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
        break;

    case 5:
        tempoPadraoAlimento = 20;
        microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
        break;

    default:
        console.log("Prato inexistente!");
        break;

}


function microOndas(tempoQueUsuarioEscolhe, tempoPadraoAlimento)
{
    if(tempoQueUsuarioEscolhe > (tempoPadraoAlimento * 2))
    {
        console.log("A comida queimou");
    }else if(tempoQueUsuarioEscolhe < tempoPadraoAlimento)
    {
        console.log("Tempo insuficiente")
    }else if(tempoQueUsuarioEscolhe > (tempoPadraoAlimento * 3))
    {
        console.log("kabumm");
    }else{
        console.log("Prato pronto, bom apetite!!!")
    }
}
