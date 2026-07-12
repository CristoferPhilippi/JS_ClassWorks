// + função literal

function somar(a, b) {
  console.log(a + b);
}
somar(1, 2);

// + Função anônima (sem nome)

const somar = function (a, b) {
  console.log(a + b);
};
somar(1, 2);

//+ Função arrow (seta)

const somar = (a, b) => {
  console.log(a + b);
};
somar(1, 2);

//+Função arrow (retorno implícito)

const somar = (a, b) => console.log(a + b);
somar(1, 2);

// ou
const somar = (a, b) => a + b;
let resultado = somar(1, 2);
console.log(resultado);
