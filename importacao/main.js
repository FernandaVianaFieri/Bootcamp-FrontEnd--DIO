
/*const funcoes = require('./funcoes_auxiliares');

console.log(funcoes);*/

// outra sintaxe
const {gets,print} = require('./funcoes_auxiliares');


/*Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos, e mostre o maior número sorteado.
Dados de entrada: 5, 50, 10,98, 23.
Saída: 98.

*/

/*
// Imprimindo a lista 
print(gets());
print(gets());
print(gets());
print(gets());
print(gets());*/



const numerosSorteados = [];

for (let i = 0;  i< 10; i++) {
    const valorSorteados = gets();
    numerosSorteados.push(valorSorteados);
    
}

console.log('Os números sorteados são: '+ numerosSorteados);

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const valorSorteados = numerosSorteados[i];

    if(valorSorteados > maiorValor){
        maiorValor = valorSorteados;
    }
    
}
console.log('O maior valor é: '+ maiorValor);


