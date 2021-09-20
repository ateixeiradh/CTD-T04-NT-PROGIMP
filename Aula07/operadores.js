/* ATRIBUIÇÃO */

// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40

/* ARITMÉTICOS */

// Nos permitem fazer operações matemáticas

// console.log ("//---> Soma = ", 10 + 15);
// console.log ("//---> Subtração = ", 10 - 15);
// console.log ("//---> Multiplicação = ", 10 * 15);
// console.log ("//---> Divisão = ", 10 / 15);

let quinze = 15;

// quinze++; // 15+1 =16
// console.log ("15++ ", quinze);

// quinze+++;
// quinze = quinze + 1; // 16+1 = 17
// console.log ("quinze = quinze + 1 ", quinze);

// quinze++; // 16+1 = 17
// console.log ("17++", quinze);

// console.log ("//---> Incremento de um em um: 15 + 1 = ", quinze);

// quinze--;
// console.log ("//---> Decremento de um em um: 15 - 1 = ", quinze);

// quinze--;
// const modRestaZero = quinze % 5; // MOD divisores
// const modRestaUm = 21 % 2; // MOD 


// console.log ("//---> Módulo. O resto obtido da divisão de 15 por 5: 0 = ", modRestaZero);

// console.log ("//---> Módulo. O resto obtido da divisão de 15 por 2: 1 = ", modRestaUm);


/**
 * PLANILHA DE DICAS - OPERADORES MATEMÁTICOS
 * 
 * [ = ] ATRIBUI
 * [ + ] SOMA
 * [ - ] SUBTRAI
 * [ * ] MULTIPLICA
 * [ / ] DIVIDE
 * [ % ] RESTO (MOD)
 * [ ++] AUMENTA UM
 * [ --] DIMINUI UM
 */

/* COMPARAÇÃO SIMPLES */

// OPERADORES LÓGICOS
// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano
// == , != , > , >= , < e <=
// &&, || E !

// COMPARAÇÃO ESTRITA
// Permite comparar valor e tipo da variável

// function igual (a, b){
//     return a === b; // qual a diferença de usar '==' e '==='
// }

function maior (a, b){
    return a > b; // > ou >=
}

function menor (a, b){
    return a < b; // < ou ,=
}

function negacao (a){
    return !a;
}

function condicao(a, b) {
    // e AND &&
    // Ana vai no sacolao
    // 1 pente de ovos E 1 molhos de couve
    
    // 1 maça E 1 banana

    // OS 2 PRODUTOS

    // AND só true quando TUDO for true
    // OR ou || é true sempre que pelo menos um true

    // true || false = true
    // false || false = false

    
    return a || b;
}

function comparacaoSimples(valorA, valorB){
    // console.log("igual == ", igual(valorA, valorB));
    // console.log("maior > ", maior(valorA, valorB));
    // console.log("menor < ", menor(valorA, valorB));
    // console.log("valorA negado ! ", negacao(valorA));
    // console.log("valorb negado ! ", negacao(valorB));
    console.log("condicao ", condicao(valorA, valorB));
}

// comparacaoSimples(0, 1); // 0 (falso) e 1 (verdadeiro)

// console.log("/==========================COMPARAÇÃO ESTRITA==========================");
// function comparacaoEstrita(){

// var num = 0;
// var obj = new String("0");
// var str = "0";

// console.log(num === num); // true
// console.log(obj === obj); // true
// console.log(str === str); // true

// console.log(num === obj); // false
// console.log(num === str); // false
// console.log(obj === str); // false
// console.log(null === undefined); // false
// console.log(obj === null); // false
// console.log(obj === undefined); // false
// }

// comparacaoEstrita();

function operadores(){
    console.log('-------------- true/false');
    console.log(!true);
    console.log(!false);
    console.log(!!false);
    console.log(!!true);
    
    console.log('-------------- 0/1');
    console.log(!1);
    console.log(!!1);
    console.log(!0);
    console.log(!!0);
    console.log(!!""); // string vazia?

    console.log('-------------- variaveis');
    let x = 5;
    let y = 9;
    
    // console.log(x < 10);
    // console.log(x !== 5); // não-igual

    console.log(x < 10 && x !== 5);

    // console.log(x > 9);
    // console.log(x === 5);

    console.log(x > 9 || x === 5);

    // console.log( x===y )
    console.log( !(x===y) )

}

function teste(){
    // let x=10;
    // let y ="a";
    // console.log( y==="b")
    // console.log(x >= 10);
    // console.log( y==="b" || x >= 10);


    x=3;
    y=8;
    // console.log(x == "3");
    // console.log(x === y);
    // console.log((x == "3" || x === y));
    // console.log(! (x == "3" || x === y));

    // console.log(y !== 8);
    // console.log(x <= y);
    // console.log((y !== 8 && x <= y));
    // console.log(! ((y !== 8 && x <= y)));

    // console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y));
    
    let str = ""
    let msg = "haha!"
    let eBonito = "false"
    
    console.log(str || msg);
    // console.log(eBonito);
    // console.log((str || msg) && eBonito);
    console.log(!( (str || msg) && eBonito));
}

operadores();
teste();


/**
 * PLANILHA DE DICAS - OPERADORES LÓGICOS
 * 
 * [ ! ] NEGADO
 * [ tudo FALSO ] false, zero/0, vazios: '' ou "", null, undefined, NaN
 * [ tudo VERDADEIRO ] true, '0', 'false', vazios: [] - array vazio, {} - objetvo vazio, function(){}
 * [ == ] VALOR
 * [ === ] OBJETO
 */
