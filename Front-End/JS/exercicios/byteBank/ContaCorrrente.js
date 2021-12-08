export class ContaCorrente {
    agencia;
    #saldo = 0; //propriedade/atributo específico da classe

    // operações com a conta
    sacar(valor) { // <= isso é um método
            if (this.#saldo >= valor) {
                    this.#saldo -= valor;
                    console.log(`Você sacou ${valor}`);
            } else {
                    console.log("Saldo insuficiente!");
            }
    }

    depositar(valor) { // <= outro método
            if (valor <= 0) return; // usando return pra encerrar a verificação
            this.#saldo += valor;
            console.log(`Foi depositado ${valor} na conta.`);
            console.log(`Seu saldo atual é ${this.#saldo}.`);
    }
    extrato(){    return this.#saldo;     } // usando return para devolver um valor 
                                            // de uma propriedade privada a uma variável
}