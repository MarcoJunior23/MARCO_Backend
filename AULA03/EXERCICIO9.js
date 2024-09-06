// Declarando duas variáveis booleanas
let isUserLoggedIn = false;
let isAdmin = true;

// Usando o operador OR para verificar se pelo menos uma é verdadeira
if (isUserLoggedIn || isAdmin) {
    console.log("Acesso concedido: Pelo menos uma das condições é verdadeira.");
} else {
    console.log("Acesso negado: Nenhuma das condições é verdadeira.");
}
