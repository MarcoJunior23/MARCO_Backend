// Função que verifica se a pessoa é maior de idade
function verificaMaioridade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

// Chamando a função e imprimindo o resultado no console
let resultado = verificaMaioridade(20); // Exemplo com idade 20
console.log(resultado);
