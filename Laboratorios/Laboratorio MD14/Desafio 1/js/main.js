let ofertas = [
    {
        nombre: "Plan001",
        capital: 150000,
        plazo: 30,
	    tasa: 0.15
    },
    {
        nombre: "Plan002",
        capital: 300000,
        plazo: 180,
	    tasa: 0.1
    },
    {
        nombre: "Plan003",
        capital: 485000,
	    plazo: 60,
        tasa: 0.23
    }
];

function flujoDeCaja() {

	let Ingresos = 0;
	let Egresos = 0;
    let array = [];

	for(let i = 0; i < ofertas.length; i++) {
		let actual = ofertas[i];
        array.push({
		ingresos: Ingresos += actual.ingresos,
		egresos: Egresos += actual.egresos
    })
    if(Ingresos > Egresos) {
        return 1;
    } else if (Ingresos < Egresos){
        return -1;
    } else {
        return 0;
    }
}
    return array;
}

console.log(flujoDeCaja())