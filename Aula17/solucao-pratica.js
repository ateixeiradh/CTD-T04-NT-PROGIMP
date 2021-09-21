
// Métodos avançados de array

//  Objetivo
//  Vamos realizar uma série de exercícios que nos ajudarão a entender melhor alguns métodos de array
// e como usá-los corretamente.

//  Micro desafios
 
//  Crie uma função que receba um array composto por números e retorna uma nova matriz (array)
//  com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().
//  Crie uma função que receba um array de palavras e um número,
// e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ()).
//  Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
//  Solução (exercícios 1-3):
 
//  // Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().
  
//  export let arrayNum = [1,2,3,4,5]
  
//  function divisorDeArrays(numeros) {
//      let soma = numeros.reduce((acum, numero) => acum + numero)
//      let arrayResultado = numeros.map(numero => numero / soma)
//      return arrayResultado
//  }
  
//  console.log(divisorDeArrays(arrayNum)); //[0.66666666666667, 0.133333333333, 0.2, 0.2666666666666, 0.33333333333]
  
//  //Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ()).
  
//  let arrayPalavras = ["leandro", "nicolas", "esteban", "pedro", "jose"]
  
//  function filtroDeArrays(palavras, numero) {
//      let resultado = palavras.filter( palavra => palavra.length > numero )
  
//      return resultado
//  }
  
//  console.log(filtroDeArrays(arrayPalavras, 4)); //[ 'leandro', 'nicolas', 'esteban', 'pedro' ]
  
 // Crie um array de objetos literais,
 // onde cada objeto será um aluno e terá dois atributos: nome e nota.
 // Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa.
  
//   let alunos = [
//      {nome: "Ezequiel", nota: 7},
//      {nome: "Martin", nota: 10},
//      {nome: "Leandro", nota: 4},
//   ]
  
//  console.log(alunos.sort((alunoA, alunoB) => alunoA.nota - alunoB.nota));
//  // [
//  //     { nome: 'Leandro', nota: 4 },
//  //     { nome: 'Ezequiel', nota: 7 },
//  //     { nome: 'Martin', nota: 10 }
//  // ]
   
//  console.log(alunos.sort((alunoA, alunoB) => {
//      if (alunoA.nome > alunoB.nome) {
//          return 1;
//      }
//      if (alunoA.nome < alunoB.nome) {
//          return -1;
//      }
//      return 0;
//  }));
//  // [
//  //     { nome: 'Ezequiel', nota: 7 },
//  //     { nome: 'Leandro', nota: 4 },
//  //     { nome: 'Martin', nota: 10 }
//  // ]
  
 
 
//  Exercício Integrador
 
//  Temos que fazer um sistema para um Agricultor controlar suas vendas. Ele tem um controle de vendas em um caderno, onde os produtos estão organizados por nome, preço e quantidade vendida. 
//  Portanto, crie um array de objetos literais com essas informações. No sistema, você tem que adicionar uma função (ou várias) que realize os seguintes passos:
//  Calcular o lucro total de todos os produtos;
//  Permitir pesquisar um produto pelo nome e calcular seu lucro total;
//  Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;
//   Classifique todos os produtos pela quantidade de dinheiro que geraram.
//  Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).
//  Calcule o lucro total após pagar 45% do lucro em impostos.
 
//  Solução (exercício integrador):
 
//  let verduras = [
//      {nome: "lechuga", precoPorKilo: 150, kilosVendidos: 15},
//      {nome: "tomate", precoPorKilo: 180, kilosVendidos: 20},
//      {nome: "cebolla", precoPorKilo: 70, kilosVendidos: 100},
//      {nome: "papa", precoPorKilo: 55, kilosVendidos: 150},
//      {nome: "zapallo", precoPorKilo: 75, kilosVendidos: 7}
//  ]
  
  
//  function lucroTotal(produtos){
//      let lucroPorProduto = produtos.map( produto => produto.precoPorKilo * produto.kilosVendidos) 
//      let resultado = lucroPorProduto.reduce((acum, elemento) => acum+elemento)
//      return resultado
//  }
  
//  function encontrarProduto(produtos, produtoAEncontrar){
//      return produtos.find(produto => produto.nome === produtoAEncontrar)
//  }
//  // let lechuga = encontrarProduto(verduras, "lechuga")
//  // console.log(lechuga);
  
//  function vendiMasQue(produtos, num){
//      let resultado = produtos.filter( produto => produto.kilosVendidos > num)
//      return resultado
//  }
  
//  let produto = encontrarProduto(verduras, "lechuga").precoPorKilo = 110
//  // console.log(verduras);
   
//  let lucroBruto = lucroTotal(verduras)
//  let lucroLiquido = lucroBruto - lucroBruto * 0.45
  
//  console.log(lucroLiquido);
 