//notação literal
//procedural - funções que manipulam dados
function verificarDisponibilidade(quartos, ocupados) {
  let res = quartos - ocupados;
  console.log("Disponíveis: " + res);
}

let quartos = 20;
let ocupados = 15;
verificarDisponibilidade(quartos, ocupados);

//orientado a objeto

const hotel = {
  quartos: 50,
  ocupados: 30,
  verificarDisponibilidade: function () {
    let res = this.quartos - this.ocupados;
    console.log("Disponíveis: " + res);
  },
};

hotel.ocupados = 5;
hotel.verificarDisponibilidade();

//Notação de construtor

const hotel = new Object();
hotel.quartos = 20;
hotel.ocupados = 11;

hotel.verificarDisponibilidade = function () {
  let res = this.quartos - this.ocupados;
  return "Disponíveis: " + res;
};

hotel.verificarDisponibilidade();

//Criando classes (mais simples) template

class Hotel {
  constructor() {
    this.quartos = 20;
    this.ocupados = 10;
  }

  verificarDisponibilidade() {
    let res = this.quartos - this.ocupados;
    return "Disponíveis: " + res;
  }
}

const hotel = new Hotel();
hotel.verificarDisponibilidade();
