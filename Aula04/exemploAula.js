
algoritmo "Hipotenusa"

símbolos: a, b, c

procedimentoLerValorA(){
    ESCREVA ("Digite o lado A do triângulo retângulo: ")
    LEIA (a)
    RETORNA (a)

}

procedimentoLerValorB(){
    ESCREVA ("Digite o lado B do triângulo retângulo: ")
      LEIA (b)
      RETORNA (b)

}

procedimentoCalcularRaiz() {
    
    a = procedimentoLerValorA()
    b = procedimentoLerValorB()

    c := RAIZQ ( a*a + b*b )//Cálculo da hipotenusa utilizando a FUNÇÃO RAIZQ,
    ESCREVA ("O valor da hipotenusa é: ", c)
}

inicioProgramaPrincipal
    
    procedimentoCalcularRaiz()

fimProgramaPrincipal