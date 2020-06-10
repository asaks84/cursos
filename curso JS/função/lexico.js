const valor = 'Global'

function funcao() {
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    funcao()
}

exec()