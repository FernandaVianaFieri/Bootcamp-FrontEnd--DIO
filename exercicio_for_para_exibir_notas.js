

const notas = [];

notas.push(5) ;
notas.push(10);
notas.push(7);
notas.push(1);

console.log(notas);


let soma = 0;

for (let i = 0;  i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;   
}
console.log('A soma das notas é: '+ soma);

const media = soma / notas.length;
console.log('A média das notas é: ' + media);

