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
