const Pessoa = require('./Pessoa');

let pessoa;

let dadosCompletos;

let nome,
    idade,
    endereco,
    genero,
    telefone;

let tempoAposentadoria;

let idadeLimiteAposentadoriaMasculino,
    idadeAcimaDoLimiteAposentadoriaMasculino,
    idadeLimiteAposentadoriaFeminino,
    idadeAcimaDoLimiteAposentadoriaFeminino,
    generoFeminino;

let tempoParaAposentadoriaZero;

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
    
    idadeLimiteAposentadoriaMasculino = 65;
    idadeAcimaDoLimiteAposentadoriaMasculino = 70;
    idadeLimiteAposentadoriaFeminino = 60
    idadeAcimaDoLimiteAposentadoriaFeminino = 63;
    generoFeminino = "Feminino";

    tempoParaAposentadoriaZero = 0;

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
        let nomeETelefone = [nome,telefone];
        
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

    test("Deve retornar tempo que falta para aposentadoria igual a zero caso seja do gênero masculino e tenha idade igual a 65", () => {
        pessoa.setIdade(idadeLimiteAposentadoriaMasculino);
        expect(pessoa.getTempoParaSeAposentar()).toBe(0);
    });

    test("Deve retornar tempo que falta para aposentadoria igual a zero caso seja do gênero masculino e tenha idade maior que 65", () => {
        pessoa.setIdade(idadeAcimaDoLimiteAposentadoriaMasculino);
        expect(pessoa.getTempoParaSeAposentar()).toBe(0);
    });

    test("Deve retornar tempo que falta para aposentadoria igual a zero caso seja do gênero feminino e tenha idade igual a 60", () => {
        pessoa.setIdade(idadeLimiteAposentadoriaFeminino);
        pessoa.setGenero(generoFeminino);
        expect(pessoa.getTempoParaSeAposentar()).toBe(tempoParaAposentadoriaZero);
    });

    test("Deve retornar tempo que falta para aposentadoria igual a zero caso seja do gênero feminino e tenha idade maior que 60" , () => {
        pessoa.setIdade(idadeAcimaDoLimiteAposentadoriaFeminino);
        pessoa.setGenero(generoFeminino);
        expect(pessoa.getTempoParaSeAposentar()).toBe(tempoParaAposentadoriaZero);
    });
});