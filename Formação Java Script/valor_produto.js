
/* Elaborar um algoritimo que calcule o que deve ser pago por um produto,considerando o preço normal de etiqueta
 e a escolha de condição de pagamento. Utilize os códigos de tabela a seguir para ler qual a condição de pagamento
 escolhida  e efetuar o cálculo adequado.
 
 1- À vista Débito, recebe 10% de desconto;
 2- À vista no dinheiro ou pix, recebe 15% de desconto;
 3- Em duas vezes, preço normal de etiqueta sem juros;
 4- Acima de duas vezes, preço normal de etiqueta + juros de 10% .
 
 */

 const valorProduto = 50;
console.log('Valor do produto na etiqueta é '+ valorProduto);





const pagDebito = valorProduto * 0.9;
const pagDinheiroPix = valorProduto * 0.85;
const pagParceladoDuasVezes = valorProduto;
const pagParceladoAcimaDeDuasVezes = valorProduto * 1.1;

let formaDePagamento = pagDinheiroPix;





if(formaDePagamento === pagDebito){
console.log('O valor a ser pago é: ' + pagDebito.toFixed(2));

}else if(formaDePagamento === pagDinheiroPix){
    console.log('O valor a ser pago é: ' + pagDinheiroPix.toFixed(2));

}else if(formaDePagamento === pagParceladoDuasVezes){
    console.log('O valor a ser pago é: ' + pagParceladoDuasVezes.toFixed(2));

}else{
    console.log('O valor a ser pago é: ' + pagParceladoAcimaDeDuasVezes.toFixed(2));
}