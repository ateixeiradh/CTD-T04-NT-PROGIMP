
let carro = { // objeto literal
    marca: 'Toyota',
    modelo: 'Etios',
    placa: 'ADF1238',

    cor: 'preto',
    roda: 15,
    chassi: 'ABCD1234',
    anoFabricacao: 2018,

    numeroPortas: 5,

    informarCarro: function() {
        return 'Esse carro é tem a marca [' + this.marca + '], modelo [' + this.modelo + '].' 
    },

    verificarAno: function() { return this.anoFabricacao;}

 };
 
//  console.log(carro.marca) // Toyota
//  console.log(carro.modelo) // Etios
//  console.log(carro.informarCarro());
//  console.log(carro.verificarAno());

 
  

 function Carros(marca, modelo, placa){
     this.marca = marca;
     this.modelo = modelo;
     this.placa = placa;


     this.informarCarro = function() {

        return 'Esse carro é tem a marca [' + this.marca + '], modelo [' + this.modelo + '].' 
    };

    this.verificarAno= function(placa) { 
        return placa + this.anoFabricacao;
    }

 }

 let meuCarro = new Carros ('Ford', 'Ka', '123');
 let carroNovo = new Carros ('Renault', 'Oroch', '434');

 console.log(meuCarro.informarCarro());
 console.log(carroNovo.informarCarro());
 console.log(meuCarro.verificarAno('1234'));