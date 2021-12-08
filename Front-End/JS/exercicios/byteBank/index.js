import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrrente.js";

// Cadastrando Clientes
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

// Criando conta do cliente
const conta1 = new ContaCorrente();
const conta2 = new ContaCorrente();
conta1.cliente = cliente1;
conta1.agencia = 1001;
conta1.numeroDaConta = 1;
conta2.cliente = cliente2;
conta2.agencia = 1001;
conta2.numeroDaConta = 2;

//movimentações
conta1.depositar(500);
conta1.transferir(100, conta2);

console.log("");

console.log(conta1);
conta1.extrato();
console.log("");
console.log(conta2);
conta2.extrato();