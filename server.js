const Conta = require("./src/Conta");

let conta = new Conta();

// conta.ativar();
conta.depositar(100.0);

console.log("Valor atual da conta: " + conta.getSaldo());