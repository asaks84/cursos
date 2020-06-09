let isAtivo = false
console.log(isAtivo)
console.log(typeof isAtivo)

isAtivo = true
console.log(isAtivo)
console.log(typeof isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(typeof isAtivo)
console.log(!!isAtivo) // Duas negações para uma comparação de verdadeiro

console.log(' ')
console.log('Tipos Verdadeiros')
console.log(!!3) // Números diferentes de 0
console.log(!!-1) // Qualquer número diferente de 0
console.log(!!' ') // Strings preenchidas
console.log(!!'texto') // Igual o de cima
console.log(!![]) // Uma Array
console.log(!!{}) // Uma chamada de operador
console.log(!!Infinity) // Infinito
console.log(!!(isAtivo = true)) // A variavel com valor true ingual ao começo

console.log(' ')
console.log('Tipos falsos')
console.log(!!0) // Numero 0
console.log(!!'') // Uma string vazia
console.log(!!null) // O vazio
console.log(!!NaN) // Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false)) // A variavel com o valor false sendo booleana

console.log(' ')
console.log('Usando comparação ou') 
console.log(!!('' || null || 0 || ' ')) // Retorna se tem algum verdadeiro
console.log(('' || null || 1 || 'texto')) // Retorna o primeiro verdadeiro = 1

let nome = 'Lucas'
console.log(nome || 'Desconhecido')