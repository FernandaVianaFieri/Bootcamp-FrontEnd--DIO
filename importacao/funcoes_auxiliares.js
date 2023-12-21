
const entradas =[5, 50, 10,98, 23,9, 59, 101,982, 230];
let i = 0;


function gets(){
   const valor= entradas[i];
   i = i+1;
   return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets,print};


