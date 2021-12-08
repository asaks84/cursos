class Cliente {
        nome;
        cpf;
}

class ContaCorrente {
        agencia;
        saldo;


        // operações com a conta
        sacar(valor){
                if(this.saldo >= valor){
                        this.saldo -= valor;
                        console.log(this.saldo);
                }else {
                        console.log("Saldo insuficiente!");
                };
        };

        depositar(valor){
                this.saldo += valor;
                console.log(`Foi depositado ${valor} na conta.`);
                console.log(`Seu saldo é de ${this.saldo}.`);
        };
};
const cliente1 = new Cliente();
const contaCorrenteRicardo = new ContaCorrente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(20);
contaCorrenteRicardo.depositar(100);

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

console.log(cliente1,"\n",cliente2)