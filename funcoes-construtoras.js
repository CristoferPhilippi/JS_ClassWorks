// Funções construtoras
const Hotel = function () {
  this.nome = "Hotel do Jamilton";
  this.quantidadeSuites = 30;
  let suitesOcupadas = 25;

  this.reservar = function () {
    if (suitesOcupadas < this.quantidadeSuites) {
      suitesOcupadas++;
    } else {
      console.log("Não é possível reservar, todos quartos ocupados");
    }
    console.log("ocupadas: " + suitesOcupadas);
  };
};

const hotel = new Hotel();
hotel.reservar();
hotel.nome = "Jose";

hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();
hotel.reservar();

//encapsulamentos
