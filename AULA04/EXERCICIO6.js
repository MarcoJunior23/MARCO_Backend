// Classe base Produto
class Produto {
     constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
         this.nome = nome;
         this.quantidade = quantidade;
         this.preco = preco;
         this.tipoComunicacao = tipoComunicacao;
         this.consumoEnergia = consumoEnergia;
         this.ligado = false;
     }
 
     ligar() {
         if (!this.ligado) {
             this.ligado = true;
             console.log(`${this.nome} está ligado.`);
         } else {
             console.log(`${this.nome} já está ligado.`);
         }
     }
 
     desligar() {
         if (this.ligado) {
             this.ligado = false;
             console.log(`${this.nome} está desligado.`);
         } else {
             console.log(`${this.nome} já está desligado.`);
         }
     }
 }
 
 // Classe Fritadeira que herda de Produto
 class Fritadeira extends Produto {
     constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
         super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
         this.temperatura = 0; // Temperatura inicial
     }
 
     ajustarTemperatura(setpoint) {
         if (this.ligado) {
             this.temperatura = setpoint;
             console.log(`Temperatura da ${this.nome} ajustada para ${this.temperatura}°C.`);
         } else {
             console.log("A fritadeira precisa estar ligada para ajustar a temperatura.");
         }
     }
 }
 
 // Classe Televisao que herda de Produto
 class Televisao extends Produto {
     constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
         super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
         this.volume = 0; // Volume inicial
     }
 
     ajustarVolume(novoVolume) {
         if (this.ligado) {
             this.volume = novoVolume;
             console.log(`Volume da ${this.nome} ajustado para ${this.volume}.`);
         } else {
             console.log("A televisão precisa estar ligada para ajustar o volume.");
         }
     }
 }
 
 // Classe ArCondicionado que herda de Produto
 class ArCondicionado extends Produto {
     constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
         super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
         this.temperatura = 24; // Temperatura inicial
     }
 
     ajustarTemperatura(setpoint) {
         if (this.ligado) {
             this.temperatura = setpoint;
             console.log(`Temperatura do ${this.nome} ajustada para ${this.temperatura}°C.`);
         } else {
             console.log("O ar-condicionado precisa estar ligado para ajustar a temperatura.");
         }
     }
 }
 
 // Função para testar as classes
 
 function main() {
     const fritadeira = new Fritadeira("Fritadeira Elétrica", 10, 150.00, "USB", 1200);
     const televisao = new Televisao("Televisão Samsung", 5, 2000.00, "Wi-Fi", 200);
     const arCondicionado = new ArCondicionado("Ar-Condicionado LG", 3, 3000.00, "Bluetooth", 1500);
 
     console.log("\nTestando Fritadeira:");
     fritadeira.ligar();
     fritadeira.ajustarTemperatura(180);
     fritadeira.desligar();
     fritadeira.ajustarTemperatura(200); // Tentando ajustar a temperatura quando está desligada
 
     console.log("\nTestando Televisão:");
     televisao.ligar();
     televisao.ajustarVolume(20);
     televisao.desligar();
     televisao.ajustarVolume(30); // Tentando ajustar o volume quando está desligada
 
     console.log("\nTestando Ar-Condicionado:");
     arCondicionado.ligar();
     arCondicionado.ajustarTemperatura(22);
     arCondicionado.desligar();
     arCondicionado.ajustarTemperatura(18); // Tentando ajustar a temperatura quando está desligado
 }
 
 main();
 