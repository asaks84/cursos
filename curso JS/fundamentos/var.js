{
    {
        {
            var sera = 'Será?'
            let sereia = 'sereia'
        }
    }
}
console.log(sera)  // exibe a var fora do bloco
// console.log(sereia) // não exibe let fora do bloco

function teste() {
    var local = 123
}
// console.log(local) não exibe fora da função

var numero = 1
{
    var numero = 2
    console.log('dentro do escopo ', numero)
}
console.log('fora do escopo ', numero) // respeita o bloco maior para todos