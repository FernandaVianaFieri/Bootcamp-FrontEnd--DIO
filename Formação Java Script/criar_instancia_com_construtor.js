class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade,anoDeNascimento){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;        
    }

   

 descrever () {
    console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade}`);  
}
}

const fernanda = new Pessoa('Fernanda',34);
const gui = new Pessoa('Gui',23);

console.log(fernanda);


// função para comparar pessoas

function compararPessoas(p1,p2){

    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) ${p2.nome}`);
    
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome } é mais velho(a)  ${p1.nome}`);
   
    }else{
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    }
}

const joao = new Pessoa('João',17);
const lucas = new Pessoa('Lucas', 17);

compararPessoas(joao,lucas);


