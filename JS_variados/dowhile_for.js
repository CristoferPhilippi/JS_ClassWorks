// while

let numero = 1;
while (numero <= 5) {
  console.log("Executou" + numero);
  //numero = numero + 1
  numero++;
}

// do... while

let numero = 1;
do {
  console.log("Executou" + numero);
  //numero = numero + 1
  numero++;
} while (numero <= 5);

//for

for (let numero = 5; numero >= 1; numero--) {
  console.log("Executou" + numero);
}

//for ex2

let postagens = [
  "postagem 1",
  "postagem 2",
  "postagem 3",
  "postagem 4",
  "postagem 5",
  "postagem 6",
];
let total = postagens.length;
for (let numero = 0; numero < total; numero++) {
  console.log(postagens[numero]);
}

//usando o in / indice - para exibir os itens da array sem verificação

let postagens = [
  "postagem 1",
  "postagem 2",
  "postagem 3",
  "postagem 4",
  "postagem 5",
  "postagem 6",
];
for (indice in postagens) {
  console.log(postagens[indice]);
}
