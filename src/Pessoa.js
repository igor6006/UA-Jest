/**
 * Criar uma classe PESSOA e adicionar os seguintes atributos para ela
 * - Nome 
 * - Idade 
 * - Endereço
 * - Gênero
 * - Telefone
 * - Tempo de trabalho
 * 
 * Essa classe deve ter um contrutor publico para instanciar todos os atributos listados acima
 * 
 * Os métodos são:
 * -> getNome> Retorna o nome
 * -> getIdade> Retorna a idade
 * -> getEndereço> Retorna o endereço
 * -> getDadosCompletos> Retorna concatenado NOME, IDADE, GENERO, TELEFONE e TEMPO DE TRABALHO
 * -> getNomeETelefone> Retorna nome e telefone.
 * -> getTempoDeTrabalho> Retorna o tempo de trabalho.
 * -> getTempoParaSeAposentar> Assuma que a idade de aposentadoria é 60 anos feminino, 65 masculino.
 * -> getTelefone> Retorna o telefone. 
 * 
 * Em seguida crie uma classe de teste para PESSOA e cubra as funcionalidades
 * com testes unitários para validar o correto funcionamento da mesma.
 * 
 * 
 * ENTREGA
 * 
 * A partir da branch aula-02 (upstram), deve ser criada uma branch com o seguinte padrão: ua-nome-sobrenome 
 * e nela realizar o desenvolvimento da atividade. Após concluída, a ativade, gerar um PR (pull request) apontando para a branch
 * entrega-02 lá do repositório do professor.
 */

class Pessoa {

    constructor(nome, idade, endereco, genero, telefone, experiencia) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.genero = genero;
        this.telefone = telefone;
        this.experiencia = experiencia;
    }

    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    getEndereco(){
        return this.endereco;
    }

    
    getDadosCompletos(){
        let dadosCompletos = this.nome.concat(", ",this.idade,", ",
        this.genero,", ",this.telefone,", ",this.endereco,", ",this.experiencia);
        return dadosCompletos;
    }

    getNomeETelefone(){
        return [this.nome,this.telefone];
    }

    getExperiencia(){
        return this.experiencia;
    }
    getTempoParaSeAposentar(){
        if(this.genero == 'Masculino'){
            return 65-this.idade;
        }else{
            return 60-this.idade;
        }
    }

    getTelefone(){
        return this.telefone;
    }
}

module.exports = Pessoa;