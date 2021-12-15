export class Conta {
    #cliente;
    #saldo;

    // construtores
    // definindo os atributos através do constructor
    constructor(agencia, cliente, saldoInicial, tipo) {
        if(this.constructor == Conta) {
            throw new Error("Não instanciar objeto da classe Conta. Classe abstrata.");
        }
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldoInicial;
        this._tipo = tipo;
    }

    get saldo() { return this.#saldo; }
    get cliente() { return this.#cliente; }
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.#cliente = novoValor;
        }
    }

    // operações com a conta (métodos)

    // metodo sacar abstrato
    sacar(valor) {
    
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if (this.#saldo >= valorSacado) {
            this.#saldo -= valorSacado;
            return valorSacado;
        } else {
            console.log("Saldo insuficiente!");
            return 0;
        }
    }

    depositar(valor) { 
        if (valor <= 0) return; // usando return pra encerrar a verificação
        this.#saldo += valor;
    }

    transferir(valor, conta) {
        if (valor <= 0) return;
        if (this.#saldo <= valor) {
            console.log("Transferência não realizada.");
            return; // return para encerrar o método
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}