// transformar componentes de objetos em atributos fora para trabalho sem '.'

const pessoa = {
    nome: 'Ana',
    idade: 5,
    Endereço: {
        logradouro: 'Rua Um',
        numero: 123
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { sobrenome, xablau = true } = pessoa
console.log( sobrenome, xablau)

pessoa.xablau = 'Aqui tem corage'
console.log(pessoa.xablau)
console.log( xablau )

pessoa.maior = 'Não é maior'
console.log (pessoa)
const { maior = true } = pessoa
console.log(maior)

const { Endereço: {logradouro, numero, cep}} = pessoa
console.log(logradouro + ', ', numero, cep)

console.log('')
console.log('Usando array')

const [a]