const Conta = require("./Conta");

describe("Conta", () => {
    test("deve depositar com conta ativa", () => {
        const conta = new Conta();

        conta.ativar();
        conta.depositar(100.00);

        expect(conta.getSaldo()).toBe(100.00);
    });
})