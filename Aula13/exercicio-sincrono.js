/**
 * {
    "nome":"Christopher",
    "profissao":"Programador",
    "idade":25,
    "linguagens":["PHP","Javascript","Dart"],
    "disponibilidadeParaViajar":true,
    "ramoProfissional": {
        "anosDeExperiencia": 12,
        "nivel": "Senior"
    },
    "maisUm": "TESTE"
}
 */

let dadoEntrada = {
    nome: "Chris",
    profissao:"Programador",
    idade: 25,
    linguagens: ["PHP","Javascript","Dart"],
    disponibilidadeParaViajar:true,
    ramoProfissional: {
        anosDeExperiencia: 12,
        nivel: "Senior",
        areaPrincipal: "TI"

    },
    maisUm: "TESTE",

    saudacao: function() {
        return 'OI mundo';
    },

    calculo: function() {
        return this.idade - this.ramoProfissional.anosDeExperiencia;
    }

};

console.log(dadoEntrada.saudacao());
console.log(dadoEntrada.ramoProfissional.anosDeExperiencia);
console.log(dadoEntrada.calculo());