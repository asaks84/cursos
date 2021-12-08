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
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(20);

console.log(cliente1, `Saldo da conta: ${contaCorrenteRicardo.extrato()}`);
console.log(cliente2);