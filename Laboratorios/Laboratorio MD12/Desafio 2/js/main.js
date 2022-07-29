let usuario = prompt("Nombre de usuario:");
let clave = Number(prompt("Contraseña:"));

if(usuario == "admin" && clave == "1234") {
    alert("Bienvenido/a");
} else {
    alert("Error 404");
}