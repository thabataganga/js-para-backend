// Declaração padrão

function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

// Utilizando Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow functions mais complexas

/* Não confundir com o operador de maio ou igual
>= X => */

const somaNumerosPequenos = (num1, num2) => {
    if ((num1 || num2) > 10) {
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow function se comporta como expressão de função e deve ser declarada antes de ser usada no código!