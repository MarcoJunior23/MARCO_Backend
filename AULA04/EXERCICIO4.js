const readline = require('readline');

class Cliente {
    constructor(nome, profissao, saldoInicial) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldoInicial;
    }

    pix(valor) {
        if (valor <= 0) {
            console.log("Valor inválido para Pix.");
            return;
        }
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Pix de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente para realizar o Pix.");
        }
    }

    emprestimo(valor) {
        if (valor <= 0) {
            console.log("Valor inválido para empréstimo.");
            return;
        }
        this.saldo += valor;
        console.log(`Empréstimo de R$ ${valor.toFixed(2)} concedido com sucesso.`);
    }

    saque(valor) {
        if (valor <= 0) {
            console.log("Valor inválido para saque.");
            return;
        }
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }

    extrato() {
        console.log(`Extrato Bancário:`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Profissão: ${this.profissao}`);
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
}

// Configuração do readline para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
    const nome = await prompt("Digite seu nome: ");
    const profissao = await prompt("Digite sua profissão: ");
    const saldoInicial = parseFloat(await prompt("Digite o saldo inicial: R$ "));

    const cliente = new Cliente(nome, profissao, saldoInicial);

    while (true) {
        console.log("\nEscolha uma opção:");
        console.log("1. Pix");
        console.log("2. Empréstimo");
        console.log("3. Saque");
        console.log("4. Extrato");
        console.log("5. Sair");

        const opcao = await prompt("Digite o número da opção desejada: ");

        if (opcao === '1') {
            const valor = parseFloat(await prompt("Digite o valor do Pix: R$ "));
            cliente.pix(valor);
        } else if (opcao === '2') {
            const valor = parseFloat(await prompt("Digite o valor do empréstimo: R$ "));
            cliente.emprestimo(valor);
        } else if (opcao === '3') {
            const valor = parseFloat(await prompt("Digite o valor do saque: R$ "));
            cliente.saque(valor);
        } else if (opcao === '4') {
            cliente.extrato();
        } else if (opcao === '5') {
            console.log("Saindo do sistema. Até mais!");
            rl.close();
            break;
        } else {
            console.log("Opção inválida. Tente novamente.");
        }
    }
}

main();
