const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

console.log(`Lista antiga: ${listaDeChamada}`);

//listaDeChamada.splice(1, 2, 'Rodrigo');
listaDeChamada.splice(2, 0, "Rodrigo");

console.log(`Lista de chamada: ${listaDeChamada}`);

// Exercicio
animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1, 0, '🐠')
animaisDoAquario.splice(3, 2, '🐟')

console.log(animaisDoAquario)