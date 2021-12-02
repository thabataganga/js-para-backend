const listaCPF = ["12365242625", "9242624265", "9352524652"];

// array
//const cliente = ["nome", "André", "idade", 36];

// objeto
/// Quando precisa fazer uma abstração do mundo real
let cliente = {
    nome: "André",
    idade: 36,
    cpf: "12365242625",
    email: "andre@email.com"
};

console.log(`Meu nome é ${cliente.nome} e eu tenho ${cliente.idade}`);

console.log(cliente.cpf.substring(0, 3) + `***` + cliente.cpf.substring(8, 10));

let tamanhoDoEmail = cliente.email.length;
let inicioDoEmail = (tamanhoDoEmail / 3) - (tamanhoDoEmail / 5);
let finalDoEmail = tamanhoDoEmail / 3;

console.log(tamanhoDoEmail);
console.log(finalDoEmail);

console.log("Email: " + cliente.email.substring(0, inicioDoEmail) + "..." + cliente.email.substring(finalDoEmail, tamanhoDoEmail));