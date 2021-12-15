import { Cliente } from "./Cliente/Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";

// Cadastrando Clientes
const cliente1 = new Cliente("Ricardo", 11122233309);

// Criando conta do cliente
const contaCorrente1 = new ContaCorrente(1001, cliente1, 500);
const contaPoupanca1 = new ContaPoupanca(1001, cliente1, 300);
const contaCorrente2 = new ContaCorrente(1001, cliente1, 500);


//movimentações
contaCorrente2.sacar(100);
contaPoupanca1.sacar(50);

let dadosDaConta = contaPoupanca1;

console.log(`
    Cliente: ${dadosDaConta.cliente.nome} 
    CPF: ${dadosDaConta.cliente.cpf} 
    Agência: ${dadosDaConta.agencia} 
    Conta: ${dadosDaConta.numeroDaConta} 
    Tipo: ${dadosDaConta._tipo} 
    Saldo: ${dadosDaConta.saldo}`);