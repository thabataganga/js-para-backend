// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log(operacaoMatematica);

// ponto flutuante

const numeroFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroFlutuante;

console.log(novaOperacao.toFixed(4));

// NaN -> Not a Number (não é um número)

const alura = "Alura";
console.log(alura * primeiroNumero);
console.log((Math.PI).toFixed(2));

//Divisão por zero
var a = 10
var b = 0
console.log(a / b) // Infinity

// Zero dividido por zero

var a = 0
var b = 0
console.log(a / b) // NaN

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    // Convertendo para REAL
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return formatado;

}

console.log(ganhoPorHora(3000, 176))

// Ordenando uma lista

var lista = [10, 1, 5, 9, 8, 12, 15];

// Crescente a-b
console.log(lista.sort((a, b) => a - b));

// Decrescente b-a

console.log(lista.sort((a, b) => b - a));