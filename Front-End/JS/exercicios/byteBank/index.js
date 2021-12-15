import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrrente.js";
import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

// Cadastrando Clientes
const cliente1 = new Cliente("Ricardo", 11122233309);

// Criando conta do cliente
const contaCorrente1 = new ContaCorrente(1001, cliente1, 500);
const contaPoupanca1 = new ContaPoupanca(1001, cliente1, 300);
const contaCorrente2 = new ContaCorrente(1001, cliente1, 50);


//movimentações
contaCorrente2.sacar(100);

let dadosDaConta = contaCorrente2;

console.log(
`Cliente: ${dadosDaConta.cliente.nome}
CPF: ${dadosDaConta.cliente.cpf}
Agência: ${dadosDaConta.agencia}
Conta: ${dadosDaConta.numeroDaConta}
Tipo: ${dadosDaConta._tipo}
Saldo: ${dadosDaConta.saldo}`
);