
/* Formula do IMC: IMC = peso/ (altura * altura) 

Elaborar um algoitimo que dado o peso e a altura de uma pessoa, mostre sua condição conforme tabela abaixo:
1 - abaixo de  18.5 > Abaixo do peço ideal;
2- Entre 18.5 e 25 > Peso normal;
3- Entre 25 e 30 >   Acima do peso;
4- Entre 30 e 40 > Obeso;
5- Acima de 40 > Obesidade Grave.
*/

const peso = 93;
const altura = 1.75;

const imc = peso / (altura *altura);
/* daria para usar uma biblioteca "Math.pow" ... ficaria  const imc = peso/Math.pow (altura.2);*/

console.log('Seu imc é: '+ imc.toFixed(3));

if(imc <18.5){
    console.log('Você está abaixo do peso ideal');

}else if(imc >=18.5&& imc <25){
    console.log('Você está com peso ideal');

}else if(imc>=25 && imc<30){
    console.log('Você está Acima  do peso ideal');

}else if(imc >=30 && imc <40){
    console.log('Você está obeso');

}else{
    console.log('Você está com obesidade Grave');
}
