function soletrar(texto) {
    console.log(texto.replace('-', '').toLocaleUpperCase().split("").join("-"));
}

soletrar("digital-house");
soletrar("ctd");