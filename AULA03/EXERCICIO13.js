// Função que verifica se uma string é um palíndromo
function verificaPalindromo(palavra) {
    // Converte a string para minúsculas e remove espaços
    let palavraFormatada = palavra.toLowerCase().replace(/\s+/g, '');
    
    // Inverte a string e compara com a original
    let palavraInvertida = palavraFormatada.split('').reverse().join('');
    
    return palavraFormatada === palavraInvertida;
}

// Chamando a função e imprimindo o resultado no console
let resultado = verificaPalindromo("arara");
console.log(resultado); // true

resultado = verificaPalindromo("casa");
console.log(resultado); // false
