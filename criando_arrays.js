// criando uma lista de arrays
const alunos = ['João', 'Vitor', 'Marina'];
// imprimindo a lista
console.log(alunos);

// adicionando itens na lista
alunos.push('Fernanda');
console.log(alunos);

// outra maneira de adicionar itens à lista, **** Atenção: se adicionarmos um novo item em uma posição de um já existente, o novo item ira subscreve-lo.
alunos[4] = 'Renata';
console.log(alunos);

// subscrevendo item da lista
alunos[1] = 'Gregory';
console.log(alunos);

// removendo o ultimo item da lista
console.log(alunos.pop());
console.log(alunos);

// removendo o primeiro item da lista
console.log(alunos.shift());
console.log(alunos);


// outro exemplo com arrays
const notas = [];
notas.push(5);
notas.push(6);
notas.push(8);
notas.push(3);

const soma = notas[0] + + notas[1] +notas[2] + notas[3] + notas[0];
console.log ('A média é:'  + soma/notas.length);
