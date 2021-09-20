
function senha (valor) {
    if (valor < 10 ) {
        return console.log("PERMITIDO");
    } else {
        return console.log("NEGADO");
    }
}

function ex04(senha){
    return senha === 1234 ? console.log('ok') : console.log ('nok');
}


function descobreMes(mes) {
    
    switch (mes){
        case 1:
            console.log('JANEIRO');
            break;
        default:
            console.log('mes errado');
    }
}

descobreMes(1);