/* Para saber se um número é PAR, usamos o operador %, ele vai dizer se uma divisão tem resto, números pares são multiplos
 de 2*/ 
 const numero = 15;
 const numeroPar =(numero % 2) == 0;
 console.log(numeroPar);

 if(numeroPar){
    console.log('Par');
 } else{
     console.log('Impar'); 
 }
 
 

