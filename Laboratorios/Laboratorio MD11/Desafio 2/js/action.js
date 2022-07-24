let ingresos = Number(prompt("Ingrese el monto de sus ingresos"));
let gastosNecesarios = ingresos * 0.5;
let gastosOpcionales = ingresos * 0.3;
let ahorroInversion = ingresos * 0.2;

alert("Distribucion de sus ingresos:");
alert("Gastos necesarios: " + gastosNecesarios);
alert("Gastos opcionales: " + gastosOpcionales);
alert("Ahorro e inversion: " + ahorroInversion);