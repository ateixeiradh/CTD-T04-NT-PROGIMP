


// const lista = ["Feijão", "Sabonete", "Arroz", "Escova", "Farinha"]
 
// // console.log(lista.join(' e '))
// // console.log(lista.splice(0, 1)) // split
// // console.log(lista[0].split('i')); // fei jao

// console.log("entrada ", lista)
// console.log("1 " + lista.pop())
// console.log("depois ", lista)

// console.log("2 " + lista.pop())
// console.log("depois ", lista)
 
// // lista.push("Final")
// // console.log("O método Push adiciona um novo valor ao array, no seu final. Ex: " + lista)
 
// // console.log("O método Shift remove e retorna o primeiro elemento do array. Ex: " + lista.shift())
 
// // lista.unshift("Começo")
// // console.log("O método Push adiciona um novo valor ao array, no seu começo. Ex: " + lista)

let filmes = ['star wars', 'matrix', 'robot', 'o Preço do Amanhã', 'a Vida é Bela']
let designInterface = ['Figma', 'Adobe XD', 'Sketch', 'Marvel APP']

function adicionarElementosDoArray2NoArray1(array1, array2) {

    console.log('entrada - ', array2);
    
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());

    console.log('saida - ', array2);
    
    return array1;

}
saida = adicionarElementosDoArray2NoArray1(filmes, designInterface);
console.log(saida);