import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    
    static #numeroDeContaCorrente = 0;

    constructor(agencia, cliente, saldoInicial) {
        const tipo = "Conta Poupança";
        super(agencia, cliente, saldoInicial, tipo);
        ContaPoupanca.#numeroDeContaCorrente++; // atribuindo num. de conta através do static
        this.numeroDaConta = ContaPoupanca.#numeroDeContaCorrente;
    }  
}