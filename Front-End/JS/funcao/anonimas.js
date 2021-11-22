const soma = (x, y) => x + y

const imprimirResultado = (a, b, operacao = soma) => {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, function(x,y){
    return x-y
})
imprimirResultado(3, 4, (x, y) => x*y)

const Pessoa = {
    falar: () => { console.log('Olá!') }
}

Pessoa.falar()