var x = 100;
console.log("Valor de la variable x =" + x +  "\n" + "lee=" + x);

//Variable de texto//;
var texto ='Hola a todos';
var nombre = "Soy Daniel un estudiante de programacion.";
console.log( texto + "\n" + nombre);

//Operadores Matematicos//;
var suma=10+5;
console.log("Valor de la variable x =" + suma +  "\t" + " lee=" + suma);

var y=5;
var z=2;
var resta= y-z;
console.log("Valor de la variable w =" + resta +  "\n" + "Resultado=" + resta);

var x=200;
var multiplicacion=x*100;
var division=multiplicacion/x;
var porcentaje=26%6;
console.log("Resultado de la multiplicacion es=" + multiplicacion);
console.log("Resultado de la division es=" + division);
console.log("El Porcentaje final es=" + porcentaje);

//Incremento y Decremento//;
var a=0;
var b=0;
var x=b++;
var z=++a;
console.log("El marcador del partido en el primer tiempo es colombia=" + x + "\n" + "argentina=" + b);
console.log("El marcador del partido en el segundo tiempo es colombia=" + z + "\n" + "argentina=" + a);

var c=50;
var d=100;
var y=d--;
var w=--c;
console.log("El valor de la variable A es=" + c + "\t" + "El valor de la variable B es=" + d);
console.log("El valor de la variable A es=" + w + "\t" + "El valor de la variable B es=" + y);

//Operadores de asignacion//
var x=1;
var y=2;
x+=y-=8;
console.log("El valor de la variable final es=" + x);

var z=2500;
var w=100;
z/=w%=6;
console.log("Repartimos un dinero entre juanito y pedro queremos saber cual es el porcentaje final al dividir este dinero" + "\n" + "EL RESULTADO ES=" + z);

//Operadores de comparacion//

var mayonesa=100;
console.log("el valor de la mayonesa es igual a " + "el valor de la mostaza" + "\n" + "LA RESPUESTA ES=" + (mayonesa==100));
console.log("el valor de la mayonesa es igual a " + "el valor de la mostaza" + "\n" + "LA RESPUESTA ES=" + (mayonesa==50));
console.log("el valor de la mayonesa es igual a " + "el valor de la mostaza" + "\n" + "LA RESPUESTA ES=" + (mayonesa===50));
console.log("el valor de la mayonesa es igual a " + "el valor de la mostaza" + "\n" + "LA RESPUESTA ES=" + (mayonesa!=50));
console.log("el valor de la mayonesa es igual a " + "el valor de la mostaza" + "\n" + "LA RESPUESTA ES=" + (mayonesa>50));
console.log("el valor de la mayonesa es igual a " + "el valor de la mostaza" + "\n" + "LA RESPUESTA ES=" + (mayonesa<50));

//Operadores Logicos o Booleados//

var a=(4>2);
var b=(10<15);
console.log ("los frijoles tienen un valor igual a las lentejas" + "\n" + (a&&b));
console.log ("los frijoles tienen un valor igual a las lentejas" + "\n" + (a||b));
console.log ("los frijoles tienen un valor igual a las lentejas" + "\n" + (!b));


