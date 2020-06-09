const valores = [7.7, 8,0, 9]
console.log(valores[0], valores[3] + ' e ' + valores[2]) // buscar indices seguidos do array, separar com vírgula
console.log(valores[0] + ', ' + valores[3] + ' e ' + valores[2]) // organizando a exibição
console.log(valores[5]) // um valor ainda não definido dentro do array
console.log(' ')

valores[7] = 'Dados' // Adicionando o elemento no espaço [7] (8º elemento), sendo numerais e string
console.log(valores) // 3 elementos vazios [4, 5, 6]
console.log(valores[6]) // Buscando o elemento 6 do array, que não foi definido
console.log('Tamanho do array: ' + valores.length) // Buscando o tamanho do array [0 a 7]
console.log(' ')

valores.push({id: 4}, false, null) // valores são adicionados após o último elemento, mesmo que existam elementos vazios no meio
console.log(valores)
console.log(valores.pop()) // Remove o último valor da array
console.log(valores) // provando a remoção do último elemento
console.log(' ')

delete valores[2] // ele deleta o valor do espaço [2], mas não reorganiza, deixa vazio
console.log(valores)

console.log(delete valores[3]) // ele só retorna uma execução da função bool 
console.log(valores) // prova da remoção do elemento por delete
console.log(typeof valores) // array é um objeto