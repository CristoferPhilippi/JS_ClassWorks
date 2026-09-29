const estados = ["São Paulo", "Ceará", "Rio de Janeiro", "Santa Catarina"];
console.log(estados);
estados.pop();
console.log(estados);
estados.shift();
console.log(estados);
estados.push("teste");
console.log(estados);
estados.unshift("Teste2");
console.log(estados);

//const novo = estados.splice(0,2)
//console.log(novo)
/*console.log(estados)

const novo2 = estados.splice(2,2, "teste01", "teste02", "teste03")
console.log(novo2)
console.log(estados)
*/
const novo3 = estados.slice(0, 2);
console.log(novo3);
console.log(estados);

//converter array para string
const usuarios = ["Cristofer", "Luana", "Celina"];
let texto = usuarios.join();
console.log(texto);
//inverso
let arrayTexto = texto.split(",");
console.log(arrayTexto);

//

const produtosDolar = [
  { produto: "Notebook", preco: 1200, moeda: "$" },
  { produto: "Celular", preco: 800, moeda: "$" },
];

const novo = produtosDolar.map(function (item) {
  let preco = item.preco * 3;
  return { produto: item, preco: preco, moeda: "R$" };
});

console.log(novo);

//////////////////////////////// FILTER /////////////////////
const usuarios2 = [
  { nome: "Cristofer", idade: 35 },
  { nome: "Luana", idade: 30 },
  { nome: "Celina", idade: 1 },
];

const funcao = function (item, i, arr) {
  console.log(this);
  return item.idade >= this.filtro;
};
const filtro = {
  filtro: 18,
};

const usuariosMaiorIdade = usuarios2.filter(funcao, filtro);

console.log(usuariosMaiorIdade);
