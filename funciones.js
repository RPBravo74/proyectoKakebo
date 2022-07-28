//inicia desafrio 1
//solicitud de datos y lo muestra en consola
let nombre = prompt('Escribe tu nombre');

console.log(nombre);

let salidaNom = nombre + " " + "Tu nombre ha sido ingresado"

alert(salidaNom);

//solicitud de apellidos
let apellidoPat = prompt('Escribe tu apellido paterno');

console.log(apellidoPat);

let salidaApPat = apellidoPat + " " + "Es tu apellido paterno y ha sido ingresado";

alert(salidaApPat);


let apellidoMat = prompt('Escribe tu apellido materno');

console.log(apellidoMat);

let salidaApMat = apellidoMat + " "+ "Es tu apellido materno y ha sido ingresado";

alert(salidaApMat);


//solicitud de profesion

let profesion = prompt('Escribe tu profesion');

console.log(profesion);

let salidaProfesion = profesion + " " + "Es tu profesion y ha sido ingresada";

alert(salidaProfesion);

//concatenacion de nombre completo

let nombrecompleto = nombre + " " + apellidoPat + " " + apellidoMat;

console.log(nombrecompleto);

let saludo = nombrecompleto + " " + "Bienvenido a nuestra pagina";

alert(saludo);


//operacion resta y muestra la edad en console y alert

let anioCorriente = 2022;

let anioNacimiento = prompt('Escribe tu año de nacimiento');

console.log (parseInt(anioNacimiento));

let calcularEdad = anioCorriente - anioNacimiento;

console.log(calcularEdad);

let mostrarEdad = calcularEdad + " "+ "años es tu edad";

alert(mostrarEdad);


//a partir de aqui se cubre el desafio 2

//utilizo un if para sacar alert si se exceden al gastar una cantidad de dinero del presupuesto diario

let gastoTransporte = prompt('El día de hoy ¿Cuánto pagaste de transporte?');

console.log(gastoTransporte);

let gastoComida = prompt('El día de hoy ¿Cuánto pagaste de alimentos?')

console.log(gastoComida);

if(gastoTransporte > 80){
    alert(nombre+ " " + 'estas gastando en transporte' + " " + gastoTransporte + " " + "lo cual excede tu gasto presupuestado diario.")
}

if(gastoTransporte < 80){
    alert(nombre+ " " + 'estas gastando en transporte' + " " + gastoTransporte + " " + "lo cual esta dentro tu gasto presupuestado diario.")
}

if(gastoComida > 80){
    alert(nombre+ " " + 'estas gastando en comida' + " " + gastoComida + " " + "lo cual excede tu gasto presupuestado diario.")
}

if(gastoComida < 80){
    alert(nombre+ " " + 'estas gastando en comida' + " " + gastoComida + " " + "lo cual esta dentro de tu gasto presupuestado diario.")
}


//pedir un numero por prompt y si excede de 1000 mostrar alert

let gastoMil = prompt('Escribe la cantidad de algún gasto que hayas realizado de más de mil pesos');

console.log(gastoMil);

if(gastoMil >1000){
    alert(nombre + " "+ 'éste gasto de' + " "+ gastoMil + " " + "excede totalmente lo permitido en tu presupuesto mensual")
}

if(gastoMil >1000){
    console.log(gastoMil + " " + 'este mensaje no sera visible para el usuario')
}


//pedir texto por prompt y si es igual a hola mostrar por alert

let saludoCorto = prompt('Generalmente cuando saludas a alguien ¿que frase usas?');

console.log(saludoCorto);

if(saludoCorto == hola){
    alert(nombre + " " + 'Te felicito! este saludo:+ " ' + saludoCorto + " "+ 'es que el que se utiliza cotidianamente.')
}













