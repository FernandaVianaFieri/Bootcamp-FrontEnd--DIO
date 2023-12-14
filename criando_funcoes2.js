function escreverUmNome(nome){
    console.log('Meu nome é ' + nome);
}

escreverUmNome('Fernanda');
escreverUmNome('Guilherme');

function verificarIdade(idade){

    if(idade>=18){
       console.log('Sua idade é: ' + idade + ' Anos. Você é Maior de Idade');
    }else{
        console.log('Sua idade é: ' + idade + ' Anos. Você é Menor de Idade');
    }
}
verificarIdade(12);