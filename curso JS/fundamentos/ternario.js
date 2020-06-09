const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(1))
console.log(resultado(7))
console.log(resultado(7.1))

console.log(resultado)


function nota(valor) {
    if(valor >= 7) {
        return 'Aprovado'
        
    } return  'Reprovado'
}

console.log(nota(5))