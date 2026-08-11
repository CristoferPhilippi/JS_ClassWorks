class Carro {
  costructor() {
    ((this.marca = "Ford"),
      (this.modelo = "Ka"),
      (this.cor = "Prata"),
      (this.placa = "AAA-0000"));
  }
  ligar() {
    this.chave = "proximidade";
    this.metodo = "botao start";
  }
}

const carro = new Carro();
carro.modelo = "Golf";
console.log(carro.modelo);

const carro2 = new Carro();
console.log(carro2.modelo);

class Produto {
  constructor() {
    //roupas
    ((this.tamanho = "M"),
      (this.cor = "Vermelho"),
      (this.preco = "50,05"),
      //Eletronicos
      (this.altura = "50cm"));
    this.largura = "30cm";
    this.voltagem = "220v";
  }
}
