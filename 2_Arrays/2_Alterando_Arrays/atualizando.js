const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

console.log(`Lista antiga: ${listaDeChamada}`);

//listaDeChamada.splice(1, 2, 'Rodrigo');
listaDeChamada.splice(2, 0, "Rodrigo");

console.log(`Lista de chamada: ${listaDeChamada}`);