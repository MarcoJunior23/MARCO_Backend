class Pessoa {
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
    }

    exibirTrabalho(nomeEmpresa, tempoDeTrabalho) {
        console.log(`Nome da empresa: ${nomeEmpresa}`);
        console.log(`Tempo de trabalho: ${tempoDeTrabalho} anos`);
    }
}

// Testando a classe
const pessoa = new Pessoa("Maria", 30, "Desenvolvedora", 5000);

// Exibindo informações de trabalho
pessoa.exibirTrabalho("Tech Solutions", 5);
