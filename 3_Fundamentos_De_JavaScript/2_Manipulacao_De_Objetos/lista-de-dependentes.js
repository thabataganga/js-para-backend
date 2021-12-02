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
    }]
};

// O objeto dentro do objeto é formado por Arrays

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

//console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependentes => dependentes.dataNasc === "04/01/2014");

console.log(filhaMaisNova);