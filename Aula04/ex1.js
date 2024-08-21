// cria uma classe chamada casa
class Casa{
    // cria o construtor que serve para passar parâmetros para a classe
    constructor(){
        this.cor= null; // parametro de cor
        this.qtdecomodos=null; // parametro de qtde de comodos 
    }
       // metódo para exibir as informações da casa
        exibeinfo(cor,qtdecomodos) {
        console.log(`A cor da casa é ${cor} e tem ${qtdecomodos} comodos`);
        
    }

}
/*
function main(){
    let minhaCasa = new Casa(); // cria um objeto chamado minha casa
    minhaCasa.cor = "Azul";
    minhaCasa.qtdecomodos= 3;
    minhaCasa.exibeinfo(minhaCasa.cor,minhaCasa.qtdecomodos);
}
main();
*/
let minhaCasa = new Casa(); // cria um objeto chamado minha casa
minhaCasa.cor = "Amarela";
minhaCasa.qtdecomodos= 4;
minhaCasa.exibeinfo(minhaCasa.cor,minhaCasa.qtdecomodos);