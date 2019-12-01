// Armazenando uma funcao em um Variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const substracao = (a, b) => a - b
console.log(substracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2 ('legal!!!')