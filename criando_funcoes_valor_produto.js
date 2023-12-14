/* Elaborar um algoritimo que calcule o que deve ser pago por um produto,considerando o preço normal de etiqueta
 e a escolha de condição de pagamento. Utilize os códigos de tabela a seguir para ler qual a condição de pagamento
 escolhida  e efetuar o cálculo adequado. 
 1- À vista Débito, recebe 10% de desconto;
 2- À vista no dinheiro ou pix, recebe 15% de desconto;
 3- Em duas vezes, preço normal de etiqueta sem juros;
 4- Acima de duas vezes, preço normal de etiqueta + juros de 10% . 
 >>>>>>>
pagDebito = valorProduto * 0.9;
pagDinheiroPix = valorProduto * 0.85;
pagParceladoDuasVezes = valorProduto;
pagParceladoAcimaDeDuasVezes = valorProduto * 1.1;*/
 



function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}


function aplicarJuros(valor,juros){
    return (valor + (valor*(juros/100)));
}


const valorProduto = 50;
console.log('Valor do produto na etiqueta é '+ valorProduto);

const debito = 1;
const pagDinheiroPix =2;
const ParceladoDuasVezes = 3;
const ParceladoAcimaDeDuasVezes = 4;

let formaDePagamento = 4;





if(formaDePagamento === 1){
console.log('O valor a ser pago é: ' + aplicarDesconto(valorProduto,10));

}else if(formaDePagamento === 2){
    console.log('O valor a ser pago é: ' + aplicarDesconto(valorProduto,15));

}else if(formaDePagamento === 3){
    console.log('O valor a ser pago é: ' + valorProduto);

}else{
    console.log('O valor a ser pago é: ' + aplicarJuros(valorProduto,10));
}