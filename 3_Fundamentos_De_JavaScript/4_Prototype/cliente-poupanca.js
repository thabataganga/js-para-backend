function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPolp) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPolp = saldoPolp;
}

const ju = new ClientePoupanca("Ju", "8948489849", "ju@email.com", 100, 200);

console.log(ju);

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPolp += valor;
}


ju.depositarPoup(30);

console.log(ju.saldoPolp);