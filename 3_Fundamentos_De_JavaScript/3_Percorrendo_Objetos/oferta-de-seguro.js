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

// Retorna todas as chaves do objeto
/* const propsClientes = Object.keys(cliente);
console.log(propsClientes); */

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para: ${obj.nome}`);
    }
}

console.log(Object.entries(cliente));
oferecerSeguro(cliente);