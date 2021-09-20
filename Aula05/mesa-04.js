// let nome = [];
// nome [1] = 'Exemplo';

// var nome
// var peso
// var idade
// var altura
// var plano
// var imc

// nome = 'José'
// sobrenome = 'da Silva'
// idade = 27
// peso = 83.5
// altura = 1.7
// plano = 'Ouro' // booleana

// var imc = peso / (altura * altura) // NaN

// console.log(
//   nome,
//   sobrenome,
//   'tem',
//   peso,
//   'Kg',
//   'e',
//   altura,
//   'de altura',
//   'por isso seu IMC é igual a',
//   imc,
//   '.'
// )

//Calculadora de IMC

const nome = ['José da Silva', 'Carlos de Souza', 'Aline Ferreira','Ana Paula'];
let idade = [27, 28, 33, 26];
let peso = [83.5, 80.1, 63.7, 55.0];
let altura = [1.70, 1.76, 1.53, 1.62];
let plano = [true, true, false, true];

// Função para calcular o imc
function calculaImc(peso, altura){
	let calc = peso / (altura * altura);
    return calc;
}

// Pecorrer todo os valores
for (let i = 0; i <= 3 ; i++) {
    let imc = calculaImc(peso[i], altura[i]);
    console.log(nome[i] + ' tem ' + idade[i] +' anos, plano ' + plano[i] + ' e seu índice de massa corporal é de ' + imc + ' kg/m2.');
}