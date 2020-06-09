var a = 3
let b = 4

var a = 30

console.log(a, b)

a = 300
b = 400
const c = 5

console.log(a, b)
console.log(c)

// tipagem fraca

let qq = 'Legal!'
console.log(qq)
console.log(typeof qq)

// USAR NOMES RELEVANTES PARA VARIAVEIS

// Var Numeros
console.log('Variavel Number')

const peso1 = 1.0
const peso2 = Number('2.2')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.75
const avaliacao2 = 5

const total = avaliacao1*peso1 + (avaliacao2*peso2)
const media = total / (peso1+peso2)

console.log(media.toFixed(2))
console.log(media)
console.log(media.toString(2))
console.log(typeof media)

// CUIDADOS COM NÚMEROS
console.log("CUIDADO COM NUMEROS")

console.log(7/0) // Dividir por 0 = Infinito
console.log("10" / 2) // Operação com string numeral, funciona normalmente
console.log("3" + 2) // Por ser uma sring, a soma vira concat
console.log("Maneiro" *2) // Operação com string caractere sem ser numeral não funciona
console.log(0.1 + 0.7) // Operação com decimais pode não resultar um valor exato
console.log("//") // console.log(10.toFixed(2)) // Não consegue chamar função com número inteiro
console.log(10.258754.toFixed(2)) // Consegue chamar função com número real