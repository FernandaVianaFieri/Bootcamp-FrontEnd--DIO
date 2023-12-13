/* Faça um algoritimo que  dados as três notas tiradas por um aluno em um semestre de faculdade, 
calcule e imprima sua média  e a sua  classificação conforme tabela abaixo:
 Média menor que 5: reprovado;
 Média entre 5 e 7: recuperação;
 Média acima de 7: Passou de sementre.
 */

 const nota1 = 8;
 const nota2 = 9;
 const nota3 = 7;
 const media = (nota1+nota2+nota3)/3;

 console.log(media);

 if(media <5){
 console.log('Sua media é  ' + media + ' Você foi Reprovado (a)');

} else if (media >5 && media<=7){
    console.log('Sua media é  ' + media + ' Você está de Recuperação (a)'); 

}else{
    (media >7)
    console.log('Sua media é  ' + media + ' Você Passou de Semestre (a)'); 

}
    