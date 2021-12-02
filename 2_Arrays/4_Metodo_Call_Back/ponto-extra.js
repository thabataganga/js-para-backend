const notas = [10, 9, 8, 7, 6];


// O forEach não retorna nada, apenas executa o que está dentro da função
/// Já o map retorna um array atualizado!

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);

console.log(notasAtualizadas);