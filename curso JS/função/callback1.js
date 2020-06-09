const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a, b){ // 'a' representa o valor do índice do array e 'b' representa a posição dentro do array
    console.log(b)
})
fabricantes.forEach(nomeFabricante => console.log(nomeFabricante)) // 'fabricante' nada mais é do que o primeiro valor passado pela forEach, como'a' acima