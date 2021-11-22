// tipos de dados
// booleanos

// conversao implicita
// conversao explicita


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


let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

// Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis
console.log(+largura * +altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // agora teremos a conversão de true (verdadeiro) para o número 1.