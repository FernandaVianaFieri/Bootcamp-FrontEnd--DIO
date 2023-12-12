/* Faça um programa para calcular o valor de uma viagem
Voccê terá 3 variáveis, são elas:
1 - preço do combustivel
2- Gasto médio de combustivel gasto por KM
3- Distância em KM da viagem
Imprima o valor  que será gasto em  combustivel na viagem   ... let para variaves que podem ser reatribuidas 
e const para variaves que NÂO podem ser reatribuidas */

console.log('Olá');

const precoLitroCombustivel = 5.79;
const kmPorLitro =10;
const distanciaEmKm = 100;

litrosConsumidos =distanciaEmKm / kmPorLitro;

const valorTotalGasto = litrosConsumidos* precoLitroCombustivel;

console.log(valorTotalGasto.toFixed(2));

