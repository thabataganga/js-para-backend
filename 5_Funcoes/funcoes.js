/* let x = "";
console.log(x);
x = "oi";
console.log(x); */

// A função recebe um parametro e processa de acordo com o que mandamos ela fazer

// 1) Declara a função

function imprimeTexto(texto) {
    console.log(texto);
}

function criaNumeroAleatorio() {
    return Math.round(Math.random() * 100);
}

// 2) Executa a função (1 ou mais vezes)

imprimeTexto("Hello World!");
imprimeTexto("*****************");
imprimeTexto("A função gera produtividade no código!");

// Imprime a função sem passar parametro
console.log(criaNumeroAleatorio());
imprimeTexto(criaNumeroAleatorio());

// É uma boa prática sempre quebrar o nosso código em pequenas funções
// Esse processo facilita o entendimento, a manutenção e a escalabilidade do código
// ATENÇÃO: tudo que for escrito dentro da função e depois do return, não será executado.