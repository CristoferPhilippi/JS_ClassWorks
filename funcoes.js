// function acao(entrada) {
//    ...
//  return resultado;
//}

/* function desligarTorneira (){
    console.log("levantar do sofá")
  console.log("desligar torneira")
  console.log("sentar no sofá")
}

desligarTorneira() */

/* function pedirCopoAgua () {

    return "Copo Agua"
}

let retorno = pedirCopoAgua()
console.log(retorno) */

/* function irMercadoComprarArroz (dinheiro) {
    
  if  (dinheiro >= 10) {
    valor = "compra autorizada"
  } else {
    valor = "Não possui dinheiro suficiente"
  }

    return valor
}

let retorno = irMercadoComprarArroz(10)
console.log(retorno) */

function calcularMedia(nota1, nota2) {
  let totalNotas = nota1 + nota2;
  let media = totalNotas / 2;

  return media;
}

let media = calcularMedia(8, 7);
let pontoExtra = 1;
let novaMedia = media + pontoExtra;
console.log(novaMedia);
