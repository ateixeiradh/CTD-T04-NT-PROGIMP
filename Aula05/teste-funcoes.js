// EXERCÍCIO 2
 
// Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
  let cm
  let pol

  function converterPolParaCm(pol) {
    console.log((cm = pol * 2.54))
  }

  converterPolParaCm(10)

  //Crie uma função que receba uma string e a converta em um URL.
  //ex: "funcaojs" é retornado como "http://www.funcaojs.com.br/"

  let string
  let url

function converterStringEmUrl(string) {
  console.log((url = 'HTTP://www.' + string + '.com.br'))
}

converterStringEmUrl('nomedomeusite')

//Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

let string
let novotexto

function converterStringEmNovoTexto(string) {
  console.log((novotexto = string + '!!!'))
}

converterStringEmNovoTexto('Meu texto vai ficar exclamativooo')