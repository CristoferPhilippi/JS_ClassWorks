class Hotel {
  constructor() {
    this.quartos = 20;
    this.ocupados = 10;
  }

  verificarDisponibilidade() {
    let res = this.quartos - this.ocupados;
    return "Disponível:" + res;
  }
}

const hotel = new Hotel();
hotel.verificarDisponibilidade();
