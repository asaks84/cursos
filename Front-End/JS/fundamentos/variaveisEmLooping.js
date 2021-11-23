const funcs = []

for(var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2] ()
console.log(' ')

const funcslet = []


for(let z = 0; z<10; z++) {
    funcslet.push(function(){
        console.log(z)
    })
}


/* for(let z = 0; z<10; z++) {
    funcslet.push( console.log(z) )
} */

//console.log(funcslet[2])
funcslet[9]

// While
const destinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `São Paulo`
);

console.log('Destinos possíveis:');
console.log(destinos);

const idade = 18;
const acompanhado = false;
const temPassagem = true;
const destinoPassagem = 'São Paulo';
let contador = 0;

// Comprando passagem

const podeComprar = idade >= 18 || acompanhado == true;

while(destinos[contador] != destinoPassagem && contador < destinos.length){
    contador++;
};

if(contador >= destinos.length){
    console.log(`\nO destino ${destinoPassagem} não está disponível`)
} else {
    console.log(`\n${destinos[contador]} está disponível!`);
}