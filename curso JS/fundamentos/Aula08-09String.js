const escola = "Cauê Carrera"

console.log(escola.charAt(3))
console.log(escola.charCodeAt(2)) // Retorna código unicode HTML referente a letra "u"
console.log(escola.indexOf('a')) // Retorna primeira posição dentro da variavel

console.log(escola.substring(3)) // Inicia exibição do valor a partir de um valor determinado dentro da variavel
console.log(escola.substring(2, 8)) // Retorna valor dentro de um intervalo definido com ultimo numero excludente
console.log('Nome: '.concat(escola).concat('!')) // Soma conteúdos de variaveis diversas, seja string ou numerica
console.log('Nome: ' + escola + ('!')) // Mesma coisa do de cima por ser string
console.log(escola.replace('Carrera', 'Leite')) // Substitui um elemento da varavel por outro


// Template Strings
const espaco = ` 
` // Usando uma template string vazia de duas linhas

console.log(espaco)
console.log('Template Strings')
const nome = "Rebeca"
const concat = "Olá" + nome + '!'

const template = `
    Olá
    ${nome}!` // chamar variavel em um template string

console.log(concat, template)

// Expressões 
console.log(`1 + 1 = ${1+1}`)
// Dessa forma não funciona, precisa de template string: console.log('1 + 1 =' 1+1)

const up = texto => texto.toUpperCase() // criando função
console.log(up(nome))  // usando função
console.log(`Meu nome é ${up(nome)}`) // usando função com template string