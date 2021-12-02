let cliente = {
    nome: "André",
    idade: 36,
    cpf: "12365242625",
    email: "andre@email.com",
    fones: ["5591235498", "552198874312"]
};

cliente.dependente = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2021"
}

console.log(cliente);

cliente.dependente.nome = "Sara Silva";

console.log(cliente);