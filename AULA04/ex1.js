// cria uma classe chamada casa
class Casa {
    // cria o construtor que serve para passar parâmetros para a classe
    constructor() {
        this.cor = null; // parametro de cor
        this.qtdecomodos = null; // parametro de qtde de comodos 
    }
    // metódo para exibir as informações da casa
    exibeinfo() {
        console.log(`A cor da casa é ${this.cor} e tem ${this.qtdecomodos} comodos`);

    }
    // método abrir janela
    abrirjanelas(qtde) {
        console.log(`Abrir ${qtde} janelas`);

    }
    fecharjanelas(qtde) {
        if (qtde == 2) {
            console.log("Todas as janelas estão fechadas");
        }
        if (qtde > 2) {
            console.log(`Não existe ${qtde} janelas para serem fechadas`);
        }
        else {
            console.log(`Fechada ${qtde} janelas`);
        }

    }
    abrirportas() {
        console.log("Portas abertas");
    }
    fecharportas() {
        console.log("Porta fechada");
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
minhaCasa.qtdecomodos = 4;
minhaCasa.exibeinfo();

const Casa2 = new Casa();
Casa2.cor = "Vermelha";
Casa2.qtdecomodos = 5;
Casa2.exibeinfo();
Casa2.abrirjanelas(1);
Casa2.abrirportas();
Casa2.abrirjanelas(2);
Casa2.fecharjanelas(2);