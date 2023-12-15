
class Pessoa {
    nome;
    idade;

   

 descrever () {
    console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade}`);  
}
}

const fernanda = new Pessoa();
fernanda.nome = 'Fernanda V';
fernanda.idade = 34;


const gui = new Pessoa();
gui.nome = "Gui";
gui.idade = 23;

fernanda.descrever();
gui.descrever();
