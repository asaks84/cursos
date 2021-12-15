import { Conta } from "./Conta.js";


//extends = herança da classe Conta e todos seu constructor e métodos
export class ContaCorrente extends Conta {
        
        static #numeroDeContaCorrente = 0;
        
        constructor(agencia, cliente, saldoInicial){
                const tipo = "Conta Corrente";
                super(agencia, cliente, saldoInicial, tipo);
                ContaCorrente.#numeroDeContaCorrente++; // atribuindo num. de conta através do static
                this.numeroDaConta = ContaCorrente.#numeroDeContaCorrente;
        }
        sacar(valor) {
                const taxa = 1.1;
                super._sacar(valor, taxa);
            }
}