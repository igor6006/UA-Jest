const Conta = require("./Conta");

describe("Conta", () => {
    let conta;

    let depositoInicial,
        saqueValido,
        saqueInvalido,
        saldoZero;

    beforeAll(() => {
        depositoInicial = 100;
        saqueValido = 70;
        saqueInvalido = 110.0;
        saldoZero = 0;
    })

    beforeEach(() => {
        conta = new Conta();
        conta.ativar();
    })

    test("Deve depositar com conta ativa", () => {
        conta.depositar(depositoInicial);
        expect(conta.getSaldo()).toBe(depositoInicial);
    });

    test("Não deve depositar com conta inativa", () => {
        conta.inativar();
        conta.depositar(depositoInicial);

        expect(conta.getSaldo()).toBe(saldoZero);
    });

    test("Deve sacar com conta ativa e saldo maior que o valor de saque", () => {
        conta.depositar(depositoInicial);
        conta.sacar(saqueValido);

        expect(conta.getSaldo()).toBe(depositoInicial - saqueValido);
    });

    test("Não deve sacar com conta inativa", () => {
        conta.depositar(depositoInicial);
        conta.inativar();
        conta.sacar(saqueValido);

        expect(conta.getSaldo()).toBe(depositoInicial);
    });

    test("Não deve sacar com conta ativa e saldo menor que o valor de saque", () => {
        conta.depositar(depositoInicial);
        conta.sacar(saqueInvalido);

        expect(conta.getSaldo()).toBe(depositoInicial);
    });
})
