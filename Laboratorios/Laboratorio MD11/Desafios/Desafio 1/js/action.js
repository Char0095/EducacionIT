let costosFijos = Number(prompt("Ingrese los costos fijos"));
let precioVenta = Number(prompt("Ingrese el precio de venta"));
let costosVar = Number(prompt("Ingrese los costos variables"));
let puntoEquilibrio = costosFijos / (precioVenta - costosVar);

alert("El Punto de equilibrio es de: " + puntoEquilibrio);