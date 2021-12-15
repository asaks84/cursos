import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrrente.js";

export class Conta {
    #cliente;
    #saldo;

    // construtores
    // definindo os atributos através do constructor
    constructor(agencia, cliente, saldoInicial, tipo) {
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldoInicial;
        this._tipo = tipo;
    }

    get saldo() { return this.#saldo; }
    get cliente() { return this.#cliente; }

    // operações com a conta (métodos)
    sacar(valor) {
        const valorSacado = valor;
        if (this.#saldo >= valorSacado) {
            this.#saldo -= valorSacado;
            return valorSacado;
        } else {
            console.log("Saldo insuficiente! \n");
        }
    }

    depositar(valor) { // <= outro método
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