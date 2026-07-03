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
