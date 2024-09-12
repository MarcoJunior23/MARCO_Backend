// Classe base Automovel
class Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.tipoCombustivel = tipoCombustivel;
        this.quantidadeRodas = quantidadeRodas;
    }

    toString() {
        return `Cor: ${this.cor}, Modelo: ${this.modelo}, Tipo de Combustível: ${this.tipoCombustivel}, Rodas: ${this.quantidadeRodas}`;
    }
}

// Classe Carro que herda de Automovel
class Carro extends Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        super(cor, modelo, tipoCombustivel, quantidadeRodas);
        this.ligado = false;
        this.vidroAberto = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.modelo} ligado.`);
        } else {
            console.log(`${this.modelo} já está ligado.`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.modelo} desligado.`);
        } else {
            console.log(`${this.modelo} já está desligado.`);
        }
    }

    abrirVidro() {
        if (!this.vidroAberto) {
            this.vidroAberto = true;
            console.log(`Vidro do ${this.modelo} aberto.`);
        } else {
            console.log(`Vidro do ${this.modelo} já está aberto.`);
        }
    }

    descerVidro() {
        if (this.vidroAberto) {
            this.vidroAberto = false;
            console.log(`Vidro do ${this.modelo} fechado.`);
        } else {
            console.log(`Vidro do ${this.modelo} já está fechado.`);
        }
    }
}

// Classe Moto que herda de Automovel
class Moto extends Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        super(cor, modelo, tipoCombustivel, quantidadeRodas);
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.modelo} ligado.`);
        } else {
            console.log(`${this.modelo} já está ligado.`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.modelo} desligado.`);
        } else {
            console.log(`${this.modelo} já está desligado.`);
        }
    }
}

// Classe Caminhao que herda de Automovel
class Caminhao extends Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        super(cor, modelo, tipoCombustivel, quantidadeRodas);
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.modelo} ligado.`);
        } else {
            console.log(`${this.modelo} já está ligado.`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.modelo} desligado.`);
        } else {
            console.log(`${this.modelo} já está desligado.`);
        }
    }
}

// Função para testar as classes
function main() {
    const carro = new Carro("Vermelho", "Fusca", "Álcool", 4);
    const moto = new Moto("Azul", "CB500", "Gasolina", 2);
    const caminhao = new Caminhao("Amarelo", "Scania", "Diesel", 6);

    console.log("\nTestando Carro:");
    console.log(carro.toString());
    carro.ligar();
    carro.abrirVidro();
    carro.descerVidro();
    carro.desligar();

    console.log("\nTestando Moto:");
    console.log(moto.toString());
    moto.ligar();
    moto.desligar();

    console.log("\nTestando Caminhão:");
    console.log(caminhao.toString());
    caminhao.ligar();
    caminhao.desligar();
}

// Executa a função principal
main();
