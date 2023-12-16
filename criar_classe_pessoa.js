/*Criar uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/(altura*altura)
Instancie uma pessoa chamada José que tenha 70kg, e 17,75 altura e peça ao José para dizer o valor do seu IMC */

class Pessoa {
nome;
peso;
altura;


constructor(nome,peso,altura){
    this.nome =nome;
    this.peso = peso;
    this.altura= altura;    
}

calcularImc(){
    return this.peso / (this.altura*this.altura);
    
}
classificarImc(){
    const imc = this.calcularImc();
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
    }
}


}

const jose = new Pessoa('José',100,1.75);
console.log('O IMC é: '+ jose.calcularImc().toFixed(2), jose.classificarImc());

const fernanda = new Pessoa ('Fernanda', 63, 1.60);
console.log('O Imc é:  ' + fernanda.calcularImc().toFixed(2), fernanda.classificarImc());