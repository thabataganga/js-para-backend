let cliente = {
    nome: "André",
    idade: 36,
    cpf: "12365242625",
    email: "andre@email.com"
};

const chaves = ["nome", "idade", "cpf", "email"];

//console.log(cliente[chaves[0]]);

//console.log(cliente["cpf"]);

chaves.forEach(info => console.log(cliente[info]));