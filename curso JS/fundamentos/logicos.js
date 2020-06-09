function compras(trab1, trab2) {
    const comprarSorverte = trab1 || trab2
    const comprarTv50 =  trab1 && trab2
    // const comprarTv32 = !!(trab1 ^ trab2) // comparando bit a bit xor
    const comprarTv32 = trab1 != trab2
    const saudavel = !comprarSorverte

    return { comprarSorverte, comprarTv50, comprarTv32, saudavel }
}

console.log(compras(false, true))
console.log(compras(true, true))