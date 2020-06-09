function carro(velocidadeMaxima = 200, a = 5) {
    let velocidade = 0 // com o let, a variavel está presa dentro da f(carro)

    this.acelerar = function(){
        if(velocidade + a <= velocidadeMaxima) {
            velocidade += a
        } else {
            velocidade = velocidadeMaxima
        }
    }

    this.getvelocidade = () => velocidade
}

const uno = new carro
uno.acelerar()
console.log(uno.getvelocidade())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(`A Ferrari está a ${ferrari.getvelocidade()} Km/h`)