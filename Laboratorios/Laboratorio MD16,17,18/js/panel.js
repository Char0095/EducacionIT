//Modularizado de clases
const Cliente = require('./clases/cliente')
const Envase = require('./clases/envase')
const Recibo = require('./clases/recibo')

//Bloque declarativo
let arrayDeEnvases = [
    new Envase("Botella", "750 ml", 50, 9, "Vidrio", 68.7),
    new Envase("Lata", "330 ml", 50, 9, "Plastico", 68.7),
    new Envase("Botella", "1000 ml", 50, 9, "Vidrio", 68.7),
];

let pressInicio = true;

//Metodos
function botonInicio() {
    console.log("Proceso iniciado: Ingrese un envase");
    console.log("Escaneando envase...");
    const envase001 = new Envase("Botella", "750 ml", 50, 9, "Plastico", 68.7);
}

function continua(){
let confirm = prompt("Desea continuar ingresando envases? (si/no)");
    if (confirm==="si") {
        console.log("Escaneando envase...");
        pressInicio=true;
    }else{
        console.log("Proceso cancelado, gracias por usar nuestra tecnologia.");
        pressInicio=false;
    }
}

function botonImprimir() {
    console.log("Proceso finalizado, imprimiendo recibo...");
        console.log("Datos del recibo: " + "\n" +
        "Datos del cliente: " + "\n" +
        "ID: " + cliente001.getId()  + "\n" +
        "Nombre: " + cliente001.getNombre() + "\n" +
        "Apellido: " + cliente001.getApellido());

        console.log("Datos del/ de los envase/s: " + "\n");
        for (Envase in arrayDeEnvases) {
            console.log("Tipo: " + arrayDeEnvases[Envase].getTipo() + "\n" 
            + "Capacidad: " + arrayDeEnvases[Envase].getCapacidad() + "\n"
            + "Precio: " + arrayDeEnvases[Envase].getPrecio() + "\n"
            + "Peso: " + arrayDeEnvases[Envase].getPeso() + "\n"
            + "Material: " + arrayDeEnvases[Envase].getMaterial() + "\n"
            + "Peso total: " + arrayDeEnvases[Envase].getPesoTotal() + "\n"
            + "-----------------------------------------------------" + "\n");
            }
    }

const cliente1 = new Cliente(0001, "Juan", "Perez");
const recibo1 = new Recibo(cliente1, arrayDeEnvases);

let envaseAux = new Envase();
envaseAux.setTipo("Lata");
envaseAux.setCapacidad("330 ml");
envaseAux.setAlto(34.8);
envaseAux.setDiametro(4.8);
envaseAux.setMaterial("Plastico");
envaseAux.setValorDevolucionXUn(0.5);

let envaseAux2 = new Envase("Botellon", "6000 ml", 500, 90, "Plastico", 68.7);

envaseAux.mostrarDatos();
console.log("-----------------------------------------------------");
envaseAux2.mostrarDatos();
console.log("-----------------------------------------------------");
cliente1.mostrarDatos();
console.log("-----------------------------------------------------");
recibo1.mostrarDatos();