function somar(numero1, numero2) {
  numero1 = isNaN(numero1) ? 0 : numero1;
  numero2 = isNaN(numero2) ? 0 : numero2;
  return numero1 + numero2;
}
somar("andre", 2);

// outro modo, porém esse concatena

function somar2(numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
}
somar2("andre", 3);
somar2(1);
