class Animal {
  constructor() {
    this.cor = "";
    this.tamanho = 0;
    this.peso = 0;
  }
  correr() {
    console.log("correr");
  }

  dormir() {
    console.log("dormir");
  }
}

class Cao extends Animal {
  latir() {
    console.log("latir");
  }
}

class Passaro extends Animal {
  voar() {
    console.log("voar");
  }
}

const cao = new Cao();
const passaro = new Passaro();

cao.correr();
cao.latir();
passaro.dormir();
passaro.voar();
