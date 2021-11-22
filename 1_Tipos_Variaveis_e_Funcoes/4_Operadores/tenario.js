// O operador tenário possui 3 condições em uma unica linha:

/* console.log(CONDIÇÃO ? TRUE : FALSE) */


// Essa função define uma idade minima constantem pois náo pode ser alterada
// Depois verifica se a idade recebida é maior ou menos do que a constante
// Exibindo uma mensagem + a idade 
function verificarIdade(idade) {
    const idadeMinima = 18;
    if (idade >= idadeMinima) {
        console.log("Maior: " + idade + " anos");
    } else {
        console.log("Menor: " + idade + " anos");
    }
}

function verificaIdadeSimplificado(idade) {
    const idadeMinima = 18;
    console.log(idade >= idadeMinima ? ("Maior: " + idade + " anos") : ("Menor: " + idade + " anos"));
}

// Definição das variaveis como let, pois no caso de um programa real, é possível sempre variar essas idades
let idadeA = 21;
let idadeB = 16;

// Envia as idades para a função verificaIdade retornar se é maior ou menor
console.log("Sintaxe completa");
console.log("*********************");
verificarIdade(idadeA);
verificarIdade(idadeB);

console.log("");
console.log("Sintaxe simplificada");
console.log("*********************");

// Envia as idades para a função verificaIdadeSimplificada rentornar se é maior ou menor, porém com sintaxe simplificada
verificaIdadeSimplificado(idadeA);
verificaIdadeSimplificado(idadeB);

// Em comparações mais longas e complexas é boa praticar usar a sintaxe completa