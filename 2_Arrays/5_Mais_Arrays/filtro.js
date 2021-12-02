const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

// O metodo filter retorna um boolean
const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5);

console.log(`Reprovados: ${reprovados}`);