const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12365242625",
    email: "andre@email.com",
    fones: ["5591235498", "552198874312"],
    dependentes: [{
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        this.saldo -= valor;
    }
};

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
cliente.sacar(10);
console.log(cliente.saldo);