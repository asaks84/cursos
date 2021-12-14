import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrrente.js";

// Cadastrando Clientes
const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

// Criando conta do cliente
const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1001, cliente2);

//movimentações
let valorDaMovimentacao = 100;
conta1.depositar(500);
conta1.transferir(valorDaMovimentacao, conta2);

let dadosDoCliente = conta2; 

console.log(
`Cliente: ${dadosDoCliente.cliente.nome}
CPF: ${dadosDoCliente.cliente.cpf}
Agência: ${dadosDoCliente.agencia}
Conta: ${dadosDoCliente.conta}
Saldo: ${dadosDoCliente.saldo}`
);