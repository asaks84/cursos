const objeto = {} // Declaração de um objeto vazio
objeto.nome = 'Casalbé' // Inserção de um (nome) parâmetro dentro do objeto

console.log(objeto)

let a = objeto // a variavel a não recebe o valor de objeto, mas sim o endereço onde o objeto está alocado

a.endereco = 'A praça é Nossa'
console.log(a)
console.log(objeto)  // exibe os dados do Objeto objeto incrementado pela variavel a

const jsonteste = { "Nome": "Renato Andrade", "Endereco": "6" }

console.log(' ')
console.log(jsonteste)
console.log(typeof jsonteste)