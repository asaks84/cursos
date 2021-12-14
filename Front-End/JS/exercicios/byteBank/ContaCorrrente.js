import { Cliente } from "./Cliente.js";
export class ContaCorrente {

        //propriedades ou atributos
        static numeroDeConta = 0;

        agencia;
        conta;

        #cliente;
        #saldo = 0;     //propriedade/atributo específico(privado) da classe
              
        // assessores
        get saldo(){ return this.#saldo; }
        get cliente(){ return this.#cliente; }

        set cliente(novoCliente){
                if(novoCliente instanceof Cliente){
                        this.#cliente = novoCliente;
                }
        }

        // construtores
        constructor(agencia, cliente){
                this.agencia = agencia;
                this.#cliente = cliente;
                ContaCorrente.numeroDeConta++; // atribuindo num. de conta através do static
                this.conta = ContaCorrente.numeroDeConta;
        }


        // operações com a conta (métodos)
        sacar(valor) { // <= isso é um método
                if (this.#saldo >= valor) {
                        this.#saldo -= valor;
                        // console.log(`Você sacou ${valor} da conta ${this.numeroDaConta}`);
                        // console.log(`Seu saldo atual é ${this.#saldo}.`);
                        // console.log("");
                        return valor; // a necessidade do return por conta 
                                      // da variavel na transferência
                } else {
                        console.log("Saldo insuficiente!");
                }
        }

        depositar(valor) { // <= outro método
                if (valor <= 0) return; // usando return pra encerrar a verificação
                this.#saldo += valor;
                // console.log(`Foi depositado ${valor} na conta ${this.numeroDaConta}`);
                // console.log(`Seu saldo atual é ${this.#saldo}.`);
                // console.log("");
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