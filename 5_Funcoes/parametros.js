// Parametros de função

function soma(numeroA, numeroB) {
    return numeroA + numeroB;
}

console.log(soma(2, 2));
console.log(soma(-12, 240));
console.log(soma(43, -150));

// Parametros x Argumentos

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos`;
}

// Atenção a ORDEM DOS PAREMTROS

console.log(nomeIdade(28, "Thabata"));
console.log(nomeIdade("Thabata", 28));

function multiplica(numeroA = 1, numeroB = 1) {
    return numeroA * numeroB;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));

// Definindo um numero padrão, se o usuário não entra com um número, ele usa o que foi definido previamente, evitando erros; 
// Bom para quando existe parametros que não são obrigatórios variar (exemplo: gravidade, densidade, etc...)
console.log(multiplica(soma(4, 5)));

// Se uma função possui muitos parametros, ela pode ser quebrada em mais funções
// Não é uma boa pratica ter funções com muito paramentros, além de dificultar a manutenção do código