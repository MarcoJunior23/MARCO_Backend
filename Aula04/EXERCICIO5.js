class Maquina {
     constructor(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
         this.nome = nome;
         this.quantidadeEixos = quantidadeEixos;
         this.rotacoesPorMinuto = rotacoesPorMinuto;
         this.consumoEnergia = consumoEnergia;
         this.ligada = false;
     }
 
     ligar() {
         if (!this.ligada) {
             this.ligada = true;
             console.log(`${this.nome} está ligada.`);
         } else {
             console.log(`${this.nome} já está ligada.`);
         }
     }
 
     desligar() {
         if (this.ligada) {
             this.ligada = false;
             console.log(`${this.nome} está desligada.`);
         } else {
             console.log(`${this.nome} já está desligada.`);
         }
     }
 }
 
 class Furadeira extends Maquina {
     constructor(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
         super(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia);
     }
 
     ajustarVelocidade(novaRotacao) {
         if (this.ligada) {
             this.rotacoesPorMinuto = novaRotacao;
             console.log(`Velocidade da furadeira ajustada para ${this.rotacoesPorMinuto} RPM.`);
         } else {
             console.log("A furadeira precisa estar ligada para ajustar a velocidade.");
         }
     }
 }
 
 // Testando as classes
 
 function main() {
     const furadeira = new Furadeira("Furadeira Bosch", 3, 1500, 800);
 
     console.log("\nTestando Furadeira:");
     furadeira.ligar();
     furadeira.ajustarVelocidade(2000);
     furadeira.desligar();
     furadeira.ajustarVelocidade(1000); // Tentando ajustar a velocidade quando está desligada
 }
 
 main();
 