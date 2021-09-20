// Exercício “Métodos de arrays”
// Objetivo - Entender a implementação e funcionamento dos métodos relacionados a arrays

// Crie um array de números pares, e utilizando a função .map() nesse array,
// crie um novo array com apenas números ímpares.

let pares = [2, 4, 6, 8, 10]
export let impares = pares.map(function (numero) {
    return numero + 1;
});
// console.log(impares);

// Crie um array de nomes, que possua dois índices com o nome Maria.
// Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
let nomes = ["Pedro", "João", "Maria", "Alberto", "Maria"];
export let marias = nomes.filter(function (nome) {
    return nome === "Maria";
});
// console.log(marias);

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
let numeros = [5, 9, 30, 5, 7];
export let concatenacao = numeros.reduce(function (acumulador, numero) {
    return acumulador + " - " + numero;
});
// console.log(concatenacao);

// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() 
// e imprima a frase “O animal é NOME_DO_ANIMAL”.
export let animais = ["Leão", "Ovelha", "Abelha", "Macaco"];
export function mostrarAnimais(){
    animais.forEach(function (animal) {
        console.log("O animal é " + animal);
    });
}