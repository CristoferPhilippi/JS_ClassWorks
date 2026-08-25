const produto1 = {
  nome: "Notebook",
  preco: 1200,
};

const produtoFactory = function (nome, preco) {
  // < - código de  dados de API

  return {
    nome,
    preco,
    recuperarAvaliacoes() {
      console.log(`avaliações para ${this.nome} com valor de ${this.preco}`);
    },
  };
};

const produto = produtoFactory("Notebook", 1200);
produto.recuperarAvaliacoes();
