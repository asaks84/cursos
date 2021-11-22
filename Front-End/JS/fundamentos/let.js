let numero = 1
let numero2 = 1
{
    let numero = 2
    console.log('dentro do escopo ', numero)
    console.log(numero2) // imprime do escopo mais próximo
}
console.log('fora do escopo ', numero) // diferente do var
console.log(' ')

// usando repetição

for(var i = 0; i<10; i++){
    console.log(i)
}
console.log('valor final de i=',i)
console.log(' ')


for(let z = 0; z<10; z++){
    console.log(z)
}
// console.log('valor final de z=',z) // não exibe pois está fora do escopo