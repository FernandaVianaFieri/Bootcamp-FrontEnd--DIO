
const notas = [];
notas.push(5);
notas.push(6);
notas.push(8);
notas.push(3);

// somando as notas
const soma = notas[0] + + notas[1] +notas[2] + notas[3] + notas[0];
console.log ('A média é:'  + soma/notas.length);

//Outro Exemplo >>>  percorrendo um array com a estrutura For
for (let i = 0;  i< 10; i++) {
  console.log(i);    
}

// Percorreindo um lista de string
const nome = 'Fernanda Viana';
for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
    
}