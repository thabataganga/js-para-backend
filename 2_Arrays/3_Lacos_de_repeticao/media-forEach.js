const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//funcao callback
/// nesse tipo dew funçao o parametro não é um dado, mas sim uma outra função
notas.forEach(nota => {
    somaDasNotas += nota;
});

let media = somaDasNotas / notas.length;

console.log(`A média é ${media}`);