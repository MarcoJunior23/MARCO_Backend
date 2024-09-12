// Função que determina o maior entre três números
function maiorNumero(num1, num2, num3) {
    let maior;

    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    return maior;
}

// Chamando a função e imprimindo o maior número no console
let resultado = maiorNumero(10, 25, 7);
console.log("O maior número é: " + resultado);
