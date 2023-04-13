const Pessoa = require('./Pessoa');

let pessoa;

let dadosCompletos;

let nome,
    idade,
    endereco,
    genero,
    telefone;

let tempoAposentadoria;

beforeAll(() => {
    nome = "Igor Osorio";
    idade = 24;
    endereco = "Av. Gramado, 4659";
    genero = "Masculino";
    telefone = 45984084693;
    experiencia = 7;
    if(genero == 'Masculino'){
        tempoAposentadoria = 65-idade;
    }else{
        tempoAposentadoria = 60-idade;
    }
    pessoa = new Pessoa(nome,idade,endereco,genero,telefone,experiencia);

    dadosCompletos = nome.concat(", ",idade,", ",genero,", ",telefone,", ",endereco,", ",experiencia);
})

beforeEach(() => {
})


describe("Pessoa", () => {
    test("Deve retornar o nome", () => {
        expect(pessoa.getNome()).toBe(nome);
    });

    test("Deve retornar a idade", () => {
        expect(pessoa.getIdade()).toBe(idade);
    });

    test("Deve retornar o endereço", () => {
        expect(pessoa.getEndereco()).toBe(endereco);
    });

    test("Deve retornar dados completos", () => {
        expect(pessoa.getDadosCompletos()).toBe(dadosCompletos);
    });

    test("Deve retornar o nome e o telefone", () => {
        var nomeETelefone = [nome,telefone];
        expect(pessoa.getNomeETelefone()).toEqual(nomeETelefone);
    });

    test("Deve retornar o tempo de trabalho", () => {
        expect(pessoa.getExperiencia()).toBe(experiencia);
    });

    test("Deve retornar quantos anos faltam para a aposentadoria", () => {
        expect(pessoa.getTempoParaSeAposentar()).toBe(tempoAposentadoria);
    });

    test("Deve retornar o telefone", () => {
        expect(pessoa.getTelefone()).toBe(telefone);
    });
});