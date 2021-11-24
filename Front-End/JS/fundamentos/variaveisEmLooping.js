// While
const destinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `São Paulo`
);

console.log('Destinos possíveis:', destinos);

const idade = 18;
const acompanhado = true;
let temPassagem = false;
const destinoPassagem = 'São Paulo';
let contador = 0;

// Verificando possibilidade de compra de passagem
const podeComprar = idade >= 18 || acompanhado == true;

// verificando se destino existe
while(destinos[contador] != destinoPassagem && contador < destinos.length){
    contador++;
};

let destinoExiste = false;
if(contador >= destinos.length){
    console.log(`\nO destino ${destinoPassagem} não está disponível`)
} else {
    console.log(`\n${destinos[contador]} está disponível!`);
    destinoExiste = true;
}

// Executando compra de passagem
if(podeComprar == true && destinoExiste == true){
    destinos.splice(contador,1);
    temPassagem = true;
    console.log("Passagem comprada com sucesso.");
}else{
    console.log("Sua compra não foi efetuada.");
};
console.log("\nDestinos disponíveis:", destinos);

// Verificação de embarque
console.log('\nHora do embarque');
const embarqueAcompanhado = false;
if(temPassagem == true && idade >= 18) {
    console.log('Boa viagem');
}else if(temPassagem == true && idade < 18 && embarqueAcompanhado == true){
    console.log('Boa viagem aos 2');
}else if(temPassagem == true && idade <18 && embarqueAcompanhado == false){
    console.log('Menor não pode embarcar sozinho')
}else{
    console.log('Proibido embarcar sem passagem');
};