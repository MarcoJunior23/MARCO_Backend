class Carro {
    constructor(marca, modelo, ano) {
        this.marca = null;
        this.modelo =null;
        this.ano = ano;
        this.motorLigado = false;  // Inicialmente, o motor está desligado
    }

    ligarMotor() {
        this.motorLigado = true;
    }

    desligarMotor() {
        this.motorLigado = false;
    }

    statusMotor() {
        return this.motorLigado ? "O motor está ligado." : "O motor está desligado.";
    }
}

// Testando a classe
const meuCarro = new Carro("Toyota", "Corolla", 2024);

// Verificando o status do motor inicialmente
console.log(meuCarro.statusMotor());  // Espera-se: "O motor está desligado."

// Ligando o motor
meuCarro.ligarMotor();
console.log(meuCarro.statusMotor());  // Espera-se: "O motor está ligado."

// Desligando o motor
meuCarro.desligarMotor();
console.log(meuCarro.statusMotor());  // Espera-se: "O motor está desligado."