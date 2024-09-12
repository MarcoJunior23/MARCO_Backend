// Declara as variáveis
let saldo = 1000;        // Saldo inicial da conta
let deposito = 200;      // Valor do depósito
let saque = 150;         // Valor do saque

// Função para realizar a operação
function realizarOperacao(saldo, valor, tipoOperacao) {
  if (tipoOperacao === 'depósito') {
    return saldo + valor;  // Adiciona o valor ao saldo
  } else if (tipoOperacao === 'saque') {
    return saldo - valor;  // Subtrai o valor do saldo
  } else {
    throw new Error('Tipo de operação inválido');  // Erro se o tipo de operação não for reconhecido
  }
}

// Realiza as operações
let saldoAposDeposito = realizarOperacao(saldo, deposito, 'depósito');
let saldoAposSaque = realizarOperacao(saldoAposDeposito, saque, 'saque');

// Exibe os resultados finais no console
console.log("Saldo inicial:", saldo);
console.log("Saldo após depósito de", deposito, ":", saldoAposDeposito);
console.log("Saldo após saque de", saque, ":", saldoAposSaque);
