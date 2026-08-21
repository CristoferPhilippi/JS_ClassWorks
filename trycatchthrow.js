//tratamento de erros:
function contarLetras(produto) {
  try {
    console.log(produto.nome.length);
    console.log("Teste");
  } catch (erro) {
    console.log("Erro ao processar");
    tratarErro(erro);
  } finally {
    console.log("sempre sera executado o finnaly");
  }
}

function tratarErro(erro) {
  throw new Error("Código de erro: 106");
}

const produto = {
  nome: "notebook",
};

console.log(produto.nome);

contarLetras(produto);
