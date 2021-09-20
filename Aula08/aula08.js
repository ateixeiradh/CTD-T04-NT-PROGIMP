/**
if (condicao) {
  // código a executar se a condição for verdadeira
}

if (condicao) {
  // código a executar se a condição for verdadeira
} else {
  // código a executar se a condição for falsa
}


if (condicao) {
  // código a executar se a condição for verdadeira
} else if (outra condicao) {
  // código a executar se a outra condição for verdadeira
} else {
  // código a executar se todas as condições forem falsas
}

4 > 10  ? 'O 4 é o maior' : 'O 10 é o maior';


// OPÇÕES QUE SÃO ESCOLHAS, VOCÊ COMPORTAMENTOS DIFERENTES POR OPÇÕES
switch (valor) {
    case valorA:
// código a ser executado se a expressão for igual a valorA.
	
    ;
case valorB:
// código a ser executado se a expressão for igual a valorB.
break;
}
*/

function novoTeste(a, b) {
    
    if (a > 9 && b == 5) {
        return console.log('TO AQUI');
    
    } else if (a >= b && a < b) { // intervalo
        return console.log('SOU IGUAL');
    } else {
        return console.log('sou um pente de ovo');
    }

    // operador ternário - 4 > 10  ? 'O 4 é o maior' : 'O 10 é o maior';
}

// novoTeste(10, 5);

function ternario(a, b){
    return a > b  ? teste() : 'O 10 é o maior';
}

function teste(){
    return console.log('teste');
}

// console.log(ternario(10,5));
ternario(2,5);
console.log(ternario(2,5));