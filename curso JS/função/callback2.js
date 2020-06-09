const notas = [1, 2, 3, 6.8, 7, 7.1, 8, 10]

//Sem Callback
const notasBaixas = []
for (let i in  notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Usando Callback
const notasAltas = notas.filter(nota => nota > 7)
console.log(notasAltas)