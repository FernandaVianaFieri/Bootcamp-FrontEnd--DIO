/* 
- Criar uma classe para representar carros
- Os carros possuem uma marca, uma cor, e um gasto médio de combustivél por Km rodado
- Crie um médtodo que dado a quantidade de Km e o preço do combustivél, nos dê o valor gasto em real para realizar 
este percurso.
*/

//classe
class Carro{

   marca;
   cor;
   gastoMedioDeCombustivelPorKm; 

   // cosntrutor
   constructor(marca,cor,gastoMedioDeCombustivelPorKm){

    this.marca = marca;
    this.cor = cor;
    this.gastoMedioDeCombustivelPorKm = gastoMedioDeCombustivelPorKm;
   }

// método
calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoMedioDeCombustivelPorKm *precoCombustivel;

}
}

const uno = new Carro('Fiat Uno', 'Prata ',   1/12);
console.log ('Fiat Uno, Gasto de Combustivel por Percurso: ' +  uno.calcularGastoDePercurso(70,5));

const palio = new Carro ('Fiat Palio', 'Preto',  1/10);
console.log('Fiat Palio, Gasto de Combustivel por Percurso:' + palio.calcularGastoDePercurso(75,5));