export class ContaCorrente {
        agencia;
        cliente;
        numeroDaConta;
        #saldo = 0;     //propriedade/atributo específico(privado) da classe

        // operações com a conta
        sacar(valor) { // <= isso é um método
                if (this.#saldo >= valor) {
                        this.#saldo -= valor;
                        console.log(`Você sacou ${valor} da conta ${this.numeroDaConta}`);
                        console.log(`Seu saldo atual é ${this.#saldo}.`);
                        console.log("");
                } else {
                        console.log("Saldo insuficiente!");
                }
        }

        depositar(valor) { // <= outro método
                if (valor <= 0) return; // usando return pra encerrar a verificação
                this.#saldo += valor;
                console.log(`Foi depositado ${valor} na conta ${this.numeroDaConta}`);
                console.log(`Seu saldo atual é ${this.#saldo}.`);
                console.log("");
        }

        extrato() { return console.log(`Saldo da conta ${this.numeroDaConta}: ${this.#saldo}`); } // usando return para devolver um valor 
        // de uma propriedade privada a uma variável

        transferir(valor, conta) {
                if (valor <= 0) return;
                if (this.#saldo <= valor) {
                        console.log("Transferência não realizada.");
                        return;
                }
                this.sacar(valor);
                conta.depositar(valor);
        }
}