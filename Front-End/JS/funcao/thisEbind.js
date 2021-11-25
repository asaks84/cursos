const pessoa = {
    saudacao: 'Olar',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // this aponta pro obj pessoa
const fala = pessoa.falar
fala() // o this dentro da constante não foi definido

const falar2 = pessoa.falar.bind(pessoa) // usa-se o bind para determinar que o this é do obj pessoa
falar2() // posso chamar a fn sem determinar this pois já foi determinado

//

function Pessoa() {
    this.idade = 0
    const self = this  //A const self é o this limitando dentro de Pessoa(), apontado na linha anterior
        setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 100) // intervalo de execução do incremento de idade e exibição é em ms, 1000ms = 1s
}

new Pessoa