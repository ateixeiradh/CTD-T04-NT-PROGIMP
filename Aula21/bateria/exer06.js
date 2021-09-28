let frutasAmarelas=['melão','mamão','limão siciliano']
let frutasVermelhas=['morango','cereja','maçã red']
let frutasVerdes=['limão','kiwi','maçã verde']

frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toUpperCase());
let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes];
console.log(todasFrutas)