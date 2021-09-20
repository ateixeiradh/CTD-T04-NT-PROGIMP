function casos(a, b) {

    valor = a < b;

    switch (valor) {
        case true:
            console.log("a é menor que b");
            break;
        case false:
            console.log("a NÃO é menor que b");
    }

}

casos(10,20);