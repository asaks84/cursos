// Função sem retorno

// a função exibe uma soma
function imprimirSoma(a, b) {
    console.log(a + b)
}

// parâmetros passados para as variaveis declaradas na função
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma() 
console.log(" ")

imprimirSoma('Insta', 3) // Ele soma string com número, transformando tudo em string
console.log(" ")

console.log("Um teste com array")
const array1 = [2, 3, 5, 6, 10]

imprimirSoma(array1[0], array1[3]) // soma de 2 elementos do mesmo array
console.log(" ")

// Função com retorno
function soma(a, b = 0) { // o valor de b é definido na descrição da função
    return a + b // um retorno da soma de a e b
}

console.log(soma(3, 3)) // passa-se valores para as duas variaveis a e b
console.log(soma(8)) // completa só a a
console.log(soma()) // a está sem definição
console.log(soma.b) // não consigo ver o valor da variavel
console.log(" ")

// Armazenar função dentro de variavel
const imprimir = function (a, b) {
    console.log(a+b)
}

imprimir(2,2) // uma variavel que executa a função

// Usando arrow
const sum = (a=1, b=1) => {
    return a+b
}

console.log(sum) // explicita que é uma função e o nome dela
console.log(sum()) // exibe o retorno
console.log(sum(3*2, 4)) // passado parâmetro
console.log(" ")

const subtracao = (a = 3, b = 5) => a - b // definindo retorno da função

console.log(subtracao())