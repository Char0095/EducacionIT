let palabra1 = "hola";
let palabra2 = "chau";
let frase = "";

/* Test A */
frase = palabra1 + " mundo";
document.writeln('Test A: ' + frase + "<br>");

/* Test B */
palabra1 = palabra2;
palabra2 = palabra1;
frase = "frase nueva";
document.writeln('Test B: chau y chau'+ "<br>");

/* Test C */
palabra1 = palabra1 + " " + palabra2;
palabra2 = palabra2 + " " + palabra2;
frase = palabra2 + " y " + palabra2;
document.writeln('Test C: ' + frase + "<br>");

/* Test D */
palabra1 = "1+1";
palabra2 = "2/0";
frase = palabra1 + "=2";
document.writeln('Test D: ' + palabra1 + " " + palabra2 + " " + frase + "<br>")
// document.writeln(palabra1 + "<br>");
// document.writeln(palabra2 + "<br>");
// document.writeln(frase + "<br>");