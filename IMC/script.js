//alert("tudo bem Cristofer?");
var hora = new Date().getHours();

if (hora < 12) {
  saudacao = "Bom diaa";
} else if (hora < 18) {
  saudacao = "Boa tarde";
} else {
  saudacao = "Boa noite";
}

document.getElementById("mensagem").innerHTML = saudacao;

//variável

let altura = 1.8;
let peso = 97;

let resultado = peso / (altura * altura);
