// O exercício a seguir é proposto:
// Usando apenas .pop() e .push()
// crie uma função que receba uma matriz de 4 elementos por parâmetro
// retorne uma matriz com os elementos invertidos em sua ordem:
// Então [1,2,3,4]
// retorna [4,3,2,1]

// function matriz4parametros (v1, v2, v3, v4) {
    
// }

// let array = [1,2,3,4];
// function matrizInvertida(array) {

//     saida1 = array.pop();
//     saida1 = saida1.push();
//     saida1 = array.pop();
//     saida1 = saida1.push();
//     saida1 = array.pop();
//     saida1 = array.push();

//     // saida1 = array.pop();
//     // saida1 = array.pop();
//     // saida1 = array.pop();
//     // saida2 = array.push();
//     // saida2 = array.push();
//     // saida2 = array.push();
//     // saida2 = array.push();

//     console.log(saida1);
//     console.log(array);
// }

// matrizInvertida([1,2,3,4]);

// function matrizInvertido(array) {
//     saida1 = array.pop()
//     saida2 = array.pop()
//     saida3 = array.pop()
//     saida4 = array.pop()
    
//     array.push(saida1)
//     array.push(saida2)
//     array.push(saida3)
//     array.push(saida4)

//     console.log(array)
// }

// matrizInvertido([1, 2, 3, 4]);

// let array = [1,2,3,4]
// let arrayInvertido = []

//  function inverteArray(){
//     arrayInvertido.push(array.pop())
//     arrayInvertido.push(array.pop())
//     arrayInvertido.push(array.pop())
//     arrayInvertido.push(array.pop())
//      return arrayInvertido
//  }

//  console.log(inverteArray())

//  let str = 'una string qualquer'
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string",
// "123","false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])


// function somarArray(){
//     let soma = [1,2,3,4]
//     soma = soma[0] +  soma[1]
//     return soma
// }
// console.log(somarArray())

function somarArray(arr) {

    if (arr.length == 0) {
        return arr.length;   
    } else {
        arr.pop();
        return arr[arr.length] + somarArray(arr);
    }
}

let v = [1, 2, 3, 4];
const saida = somarArray(v);
console.log(somarArray(v));