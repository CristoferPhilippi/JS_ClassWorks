class Animal {
  constructor() {
    this.cor = "";
    this.tamanho = 0;
    this.peso = 0;
  }
  correr() {
    console.log("correr");
    console.log("como");
    console.log("um");
  }

  dormir() {
    console.log("dormir");
  }
}

class Cao extends Animal {
  constructor() {
    super();
    this.tamanhoOrelha = 0;
  }
  latir() {
    console.log("latir");
  }
  correr() {
    super.correr();
    console.log("cao");
  }
}

class Passaro extends Animal {
  voar() {
    console.log("voar");
  }
}

class Papagaio extends Passaro {
  falar() {
    console.log("Falar");
  }
  correr() {
    super.correr();
    console.log("passaro");
  }
}

const cao = new Cao();
const passaro = new Passaro();
const papagaio = new Papagaio();

cao.tamanhoOrelha = 10;
console.log(`Tamanho de orelha: ${cao.tamanhoOrelha}`);

cao.correr();
cao.latir();
passaro.dormir();
passaro.voar();
papagaio.voar();
papagaio.correr();
