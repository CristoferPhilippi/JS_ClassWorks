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
