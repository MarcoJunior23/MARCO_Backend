class Fruta {
    // Criar construtor
    constructor() {
      this.sabor = "Doce";
      this.nome = "Laranja",
      this.cor = "Verde",
      this.peso = 400,
      this.diasdesdecolheita = 5,
      this.isMadura = null; // O atributo pode ser opcional, inicializado como null
    }
  
    // Criar método
    madura(diasParaMadura) {
      if (diasParaMadura >= this.diasdesdecolheita) {
        console.log(`A ${this.nome} está madura`);
      } else {
        console.log(`A ${this.nome} não está madura`);
      }
    }

  }


  const Tangerina = new Fruta();
  Tangerina.madura(6);