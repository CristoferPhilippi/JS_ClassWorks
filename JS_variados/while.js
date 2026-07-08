// While

let numero = 1;

while (numero <= 4) {
  console.log("pedaço de pizza " + numero);
  numero = numero + 1;
}

// While ex2

let postagens = [
  "postagem 1",
  "postagem 2",
  "postagem 3",
  "postagem 4",
  "postagem 5",
];

const totalPostagens = postagens.length;
console.log(totalPostagens);

let numero = 0;

while (numero < totalPostagens) {
  console.log("IMAGEM");
  console.log(postagens[numero]);
  console.log("------");
  numero = numero + 1;
}
