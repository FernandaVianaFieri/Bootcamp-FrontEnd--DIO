
function calcularImc(peso, altura){
    return peso / Math.pow(altura,2);
    }


    function classificarImc(imc){

if(imc <18.5){
    return('Você está abaixo do peso ideal');

}else if(imc >=18.5&& imc <25){
    return('Você está com peso ideal');

}else if(imc>=25 && imc<30){
    return('Você está Acima  do peso ideal');

}else if(imc >=30 && imc <40){
    return('Você está obeso');

}else{
    return('Você está com obesidade Grave');
}}
   
function main(){
const peso = 93;
const altura = 1.75;
const imc = calcularImc(peso,altura);
console.log('Seu imc é: '+ imc.toFixed(3));
console.log(classificarImc(imc));
}
main();

