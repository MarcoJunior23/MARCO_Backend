// Simulando variáveis de login e permissão de administrador
let isLoggedIn = true; // usuário está logado
let isAdmin = true; // usuário tem permissão de administrador

// Verificando se o usuário está logado e se é administrador
if (isLoggedIn && isAdmin) {
    console.log("Acesso permitido: O usuário é um administrador.");
} else {
    console.log("Acesso negado: O usuário não tem permissão.");
}
