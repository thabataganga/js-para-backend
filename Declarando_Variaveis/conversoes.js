// tipos de dados
// booleanos

// conversao implicita

const numero = 456;
const numeroString = "456";

console.log("A constante A vale " + numero + " e é do tipo " + (typeof numero));
console.log("A constante B vale " + numeroString + " e é do tipo " + (typeof numeroString));

// compara apenas o conteúdo
console.log("O conteúdo A e B de são iguais?");
console.log(numero == numeroString);

// compara os tipos também
console.log("Os tipos de A e B são iguais?");
console.log(numero === numeroString);

// Number()
// String()
console.log("A+B = " + (numero + Number(numeroString)));

// conversao explicita