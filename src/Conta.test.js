const Conta = require("./Conta");
const Cliente = require("./Cliente");

describe("Conta", () => {
    test("deve depositar com conta ativa", () => {
        const conta = new Conta();
        const cli = new Cliente();

        conta.ativar();
        conta.depositar(100.00);

        expect(conta.getSaldo()).toBe(100.00);
    });
})