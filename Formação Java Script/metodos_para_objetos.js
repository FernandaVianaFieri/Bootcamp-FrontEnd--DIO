
const pessoa ={
    nome:'Fernanda V',
    idade: 25,

    /*função*/

 descrever: function () {
    console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade}`);  
}
};

/*
//pesssoa.descrever();
pessoa.nome = 'Gui';
pessoa.idade = 23;
pessoa.descrever();*/


//recebeo atributo
pessoa['nome'] = 'teste';

//acesso direto
pessoa.nome = 'teste';