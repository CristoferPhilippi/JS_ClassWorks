const conta = {
  titular: "Luana",
  saldo: 1000,
  depositar: function (valor) {
    this.saldo += valor;
    console.log(
      `Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`,
    );
  },
  sacar: function (valor) {
    if (this.saldo < valor) {
      console.log(`Saldo insuficiente para saque de R$ ${valor}`);
    } else {
      this.saldo -= valor;
      console.log(
        `Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`,
      );
    }
  },
  consultarSaldo: function () {
    console.log(`Saldo atual de ${this.titular}: R$ ${this.saldo}`);
  },
};
conta.depositar(200);
conta.sacar(2000);
conta.sacar(300);
conta.consultarSaldo();
