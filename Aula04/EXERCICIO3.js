class Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.tipoCombustivel = tipoCombustivel;
        this.quantidadeRodas = quantidadeRodas;
    }

    // Método para exibir informações do automóvel
    exibirInformacoes() {
        return `${this.modelo} (${this.cor}), Combustível: ${this.tipoCombustivel}, Rodas: ${this.quantidadeRodas}`;
    }
}

// Classe Carro que herda de Automóvel
class Carro extends Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas, temVidrosEletricos) {
        super(cor, modelo, tipoCombustivel, quantidadeRodas);
        this.temVidrosEletricos = temVidrosEletricos;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log(`Carro ${this.modelo} ligado.`);
    }

    desligar() {
        this.ligado = false;
        console.log(`Carro ${this.modelo} desligado.`);
    }

    abrirVidro() {
        if (this.temVidrosEletricos) {
            console.log("Abrindo vidro elétrico...");
        } else {
            console.log("Este carro não tem vidros elétricos.");
        }
    }

    descerVidro() {
        if (this.temVidrosEletricos) {
            console.log("Descendo vidro elétrico...");
        } else {
            console.log("Este carro não tem vidros elétricos.");
        }
    }
}

// Classe Moto que herda de Automóvel
class Moto extends Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        super(cor, modelo, tipoCombustivel, quantidadeRodas);
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log(`Moto ${this.modelo} ligada.`);
    }

    desligar() {
        this.ligado = false;
        console.log(`Moto ${this.modelo} desligada.`);
    }
}

// Classe Caminhao que herda de Automóvel
class Caminhao extends Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        super(cor, modelo, tipoCombustivel, quantidadeRodas);
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log(`Caminhão ${this.modelo} ligado.`);
    }

    desligar() {
        this.ligado = false;
        console.log(`Caminhão ${this.modelo} desligado.`);
    }
}

// Exemplo de uso
const carro = new Carro('vermelho', 'Fusca', 'Gasolina', 4, true);
const moto = new Moto('azul', 'Honda', 'Gasolina', 2);
const caminhao = new Caminhao('amarelo', 'Scania', 'Diesel', 6);

console.log(carro.exibirInformacoes());
carro.ligar();
carro.abrirVidro();
carro.descerVidro();
carro.desligar();

console.log(moto.exibirInformacoes());
moto.ligar();
moto.desligar();

console.log(caminhao.exibirInformacoes());
caminhao.ligar();
caminhao.desligar();
