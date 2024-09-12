// Classe Livros
class Livros {
     constructor(nome, quantidade, preco, autor, edicao) {
         this.nome = nome;
         this.quantidade = quantidade;
         this.preco = preco;
         this.autor = autor;
         this.edicao = edicao;
     }
 
     emprestar() {
         if (this.quantidade > 0) {
             this.quantidade--;
             console.log(`Você emprestou o livro "${this.nome}". Quantidade restante: ${this.quantidade}.`);
         } else {
             console.log(`Não há mais cópias disponíveis do livro "${this.nome}".`);
         }
     }
 
     devolver() {
         this.quantidade++;
         console.log(`Você devolveu o livro "${this.nome}". Quantidade disponível agora: ${this.quantidade}.`);
     }
 
     // Método para exibir detalhes do livro
     exibirDetalhes() {
         console.log(`Detalhes do Livro:`);
         console.log(`Nome: ${this.nome}`);
         console.log(`Quantidade: ${this.quantidade}`);
         console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
         console.log(`Autor: ${this.autor}`);
         console.log(`Edição: ${this.edicao}`);
     }
 }
 
 // Função para testar a classe Livros
 function main() {
     const livro1 = new Livros("1984", 3, 29.90, "George Orwell", 1);
     const livro2 = new Livros("O Senhor dos Anéis", 2, 59.90, "J.R.R. Tolkien", 2);
 
     console.log("\nTestando Livro 1:");
     livro1.exibirDetalhes();
     livro1.emprestar();
     livro1.emprestar();
     livro1.devolver();
     livro1.emprestar();
     livro1.emprestar(); // Tentando emprestar quando a quantidade é zero
 
     console.log("\nTestando Livro 2:");
     livro2.exibirDetalhes();
     livro2.emprestar();
     livro2.devolver();
 }
 
 main();
 