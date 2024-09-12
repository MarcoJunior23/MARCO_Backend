const login = "senai"; // variavel de login
const senha = "CFP501"; // variavel de senha
const op = 2; // variavel de opção
if(login === "senai" && senha=== "CFP501" && op ===1){
    console.log("Bibliotecaria");
}
if(login ==="senai" && senha === "CFP501" && op===2){
    console.log("Cliente");

}
if(login ==="senai" && senha === "CFP501" && op>3 ) {
    console.log("Opção inexistente");
}