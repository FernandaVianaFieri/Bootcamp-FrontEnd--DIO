/*Faça um programa para calcular o valor de uam viagem.
Agora terão 5 variáveis, sendo elas:
1- Preço do etanol;
2- Preço da gasolina;
3-O tipo de combustivel que está no seu carro;
4- Gasto médio de combustivel do carro por km;
5- Distância em km da viagem.

Imprima no console o valor que será gasto para realizar esta viagem
*/
const alcool = 1;
const gasolina =2;


const precoEtanol = 4.50;
const precoGasolina = 5.40;
let tipoCombustivel = 2;
const kmPorLitroNaGalosina = 10;
const kmPorLitroNoEtanol = 8;
const distanciaViagemEmKm = 350;


if (tipoCombustivel== 2){
    gastoTotalDaViagem = ( distanciaViagemEmKm / kmPorLitroNaGalosina )*precoGasolina;
    console.log('Gasto total da viagem usando Gasolina: ' +   gastoTotalDaViagem.toFixed(2));

}else{
    gastoTotalDaViagem = (distanciaViagemEmKm / kmPorLitroNoEtanol)*precoEtanol;
    console.log('Gasto total da viagem usando Alcool: '+ gastoTotalDaViagem.toFixed(2));
}

