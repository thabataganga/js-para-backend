const text1 = "Olá, mundo!";
const text2 = 'Olá, mundo!';
const Senha = "H787oiad9!*Maefl";
const StringDeNumeros = "34567";


/// Variando aspas

const citacao1 = 'O Leo disse "oi"';
console.log("Aspas 1: " + citacao1);

const citacao2 = "O Leo disse 'oi'";
console.log("Aspas 2: " + citacao2);

/// concatenação (+)

const citacao = "Meu nome é ";
const meuNome = "Thabata";

console.log("Concatenação: " + citacao + meuNome);

/// Caracteres especiais com unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
console.log("Unicodes: ")
console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

/// Case sensitive
// o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

const cidade = "belo horizonte";
const input = "Belo Horizonte";

// convertendo todos os caracteres para minusculos
const inputMinusculo = input.toLowerCase();

console.log("Booleano: " + (cidade === inputMinusculo));

/// O Tamanho de uma String 
const senha = "minhaSenha123"
console.log("Tamanho: " + senha.length) // 13 caracteres

// length não leva () no final, pois é uma propriedade e não uma função/metodo

/// Template string ou template literal