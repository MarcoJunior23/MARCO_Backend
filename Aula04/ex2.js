class Usuario{
    constructor(){
        this.nome = null;
        this.login=null;
        this.senha=null;
        this.cpf = null;
        this.celular = null;
    }
    exibir_info(){
        console.log(`Nome do usuario: ${this.nome}`);
        console.log(`Login: ${this.login}`);
        console.log(`Senha: ${this.senha}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Celular: ${this.celular}`);
    }
    verifica_login(user,senha){
        if((user == this.login) && (senha == this.senha)){
           console.log(`Login correto ! Bem vindo ${user}`);
        }
        else{
            console.log(`Login incorreto ! Tente novamente !`);

        }

    }
}