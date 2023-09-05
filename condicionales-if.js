/*CONDICIONALES: SETENCIA IF (operador ternario - switchs) ✏️💪*/

// La sentencia if , es una estructra de control. Se utiliza para crear bifurcaciones en el flujo de ejecucion de  nuestro programa. Si la condcion es evaluda como true se ejecutara cierto bloque de codigo y no dara lugar a la ejecucion de otro codigo. 

if (true) {
  console.log('Mostrar mensaje si la condicion es true');
} // Mostrar mensaje si la condicion es true

if (false) {
  console.log('Mostrar mensaje si la condicion es false');
}

//tambien podemos pasar una expresion entre los parentesis

if (10 > 5) {
  console.log('El numero 10 es mas grande que el numero 5');
}

if (10 < 5) {
  console.log('El numero 5 es mas grande que el numero 10');
}

if (10 > 5) {
  console.log('El numero 10 es mas grande que el numero 5');
}

//podemos usar en todos los if VARIABLES

const num1 = 5
const num2 = 5

// if (num1 > num2) {
//   console.log(`${num1} es mas grande que el ${num2}`);
// }

// if (num1 < num2) {
//   console.log(`${num2} es mas grande que el ${num1}`);
// }

// if (num1 === num2) {
//   console.log(`${num2} es igual que ${num1}`);
// }


//else ()

//La clausula es opcional, es decir que el bloque se inserte en nombre de else es completamnete opcional y se ejecutara en caso que la condicion sea valuda como false

// if (num1 > num2) {
//   console.log(`TRABAJA IF: ${num1} es mas grande que el ${num2}`);
// } else {
//   console.log(`TRABAJA ELSE: ${num2} es mas grande que el ${num1}`);
// }

// num1 === num2
if (num1 > num2) { // si num1 es mayor que num2
  console.log(`TRABAJA IF: ${num1} es mas grande que el ${num2}`);
} else if (num1 === num2) { //else if --> cual es la traduccion? // si no num1
  console.log(`TRABAJA ELSE IF: ${num2} es igual que ${num1}`);
} else {
  console.log(`TRABAJA ELSE: ${num2} es mas grande que el ${num1}`);
}

// Crear una funcion que va estar recibiendo por parametro un string, tendra que evaluar el dia de la semana y retornar que dia de la semana acompañado de un mensaje. : "Hoy es lunes". En caso de no ser ningun dia de la semana (lunes, martes, miercoles,jueves, viernes,sabado y domingo) debera impimir: "El argumento pasado no es un dia de la semana"

function weekday(day) {
  const message = 'El día recibido es'
  if (day === 'lunes') {
    console.log(`${message} ${day}`);
  } else if (day === 'martes') {
    console.log(`${message} ${day}`);
  } else if (day === 'miercoles') {
    console.log(`${message} ${day}`);
  } else if (day === 'jueves') {
    console.log(`${message} ${day}`);
  } else if (day === 'viernes') {
    console.log(`${message} ${day}`);
  } else if (day === 'sabado') {
    console.log(`${message} ${day}`);
  } else if (day === 'domingo') {
    console.log(`${message} ${day}`);
  } else {
    console.log("No es un día de la semana");
  }
}

weekday("lunes")