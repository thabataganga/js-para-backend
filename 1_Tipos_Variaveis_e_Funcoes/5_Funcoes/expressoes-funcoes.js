// 1. Declaração de função

/* function minhaFuncao(param) {
    // bloco do código
}

minhaFuncao("param"); */

// 2. Expressão da função

/// Geralmente são funções anonimas e sem nome
/// Aqui a função se comporta como uma variavel e não pode ser chamada antes de ser declarada no código
const soma = function(num1, num2) { return num1 + num2 };
console.log(soma(1, 1));

// 3. Diferença principal ??????
/// HOISTING: Funções e var são listadas no topo, independente de onde estiver no arquivo

console.log(apresentar());

function apresentar() {
    return "Olá";
}