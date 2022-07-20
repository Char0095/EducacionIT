let x = 10;
let y = 20;

/* Test A */
x = x + x + 1;
y = y - y - x;
document.writeln('Test A:' + "<br>");
document.writeln("Valor de X: " + x + "<br>");
document.writeln("Valor de Y: " + y + "<br><br>");

/* Test B */
x = (x - y) + 4;
y = 4 + (y + 5);
document.writeln('Test B:' + "<br>");
document.writeln("Valor de X: " + x + "<br>");
document.writeln("Valor de Y: " + y + "<br><br>");

/* Test C */
x = x * 2 - 4;
y = 4 - y * 2;
document.writeln('Test C:' + "<br>");
document.writeln("Valor de X: " + x + "<br>");
document.writeln("Valor de Y: " + y + "<br><br>");

/* Test D */
x = (20 - x) / y;
y = x + 2 / y;
document.writeln('Test D:' + "<br>");
document.writeln("Valor de X: " + x + "<br>");
document.writeln("Valor de Y: " + y + "<br><br>");

/* Test E */
x = ((1 - x) * (y / 8)) * 4 * 0;
y = (x + 3) / x;
document.writeln('Test E:' + "<br>");
document.writeln("Valor de X: " + x + "<br>");
document.writeln("Valor de Y: " + y + "<br>");