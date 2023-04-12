class Conta{

    constructor(){
        this.saldo = 0;
        this.ativo = false;
    }

    getSaldo(){
        return this.saldo;
    }

    ativar(){
        this.ativo=true;
    }

    inativar(){
        this.ativo=false;

    }
    
    depositar(valor){
        if(this.ativo){
            this.saldo += valor;
        }else{
            throw new Error("Conta inativa! nao pode depositar");
        }
    }

    sacar(valor){
        if(this.ativo && (valor <= this.saldo)){
            this.saldo -= valor;
        }else{
            throw new Error("Conta inativa ou saldo inferior ao valor de saque! nao pode sacar");
        }
    }
}

module.exports = Conta;