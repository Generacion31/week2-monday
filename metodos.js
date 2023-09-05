// METODOS PARA STINGS

const cadenaDeTexto = "Hola soy una cadena de texto"

//conocer el tamaño del string

console.log(cadenaDeTexto.length); //28

//.length NO es un metodo, es una propiedad que tienen tanto los stings como los arrays

//como puedo acceder al caracter de un string?
console.log(cadenaDeTexto[0]); //H
// console.log(cadenaDeTexto[5]); //s


//METODOS - PROPIEDADES
//cadenaDeTexto.METODO() // <- ESTO es un metodo
//cadenaDeTexto.length // <- ESTO es una  propiedad


//chartAt(indice) - Nos devuelve el caracter en la posicion especificada. En caso que no existe, nos va a retornar ''

console.log(cadenaDeTexto.charAt(0)); //H
console.log(cadenaDeTexto.charAt(5));//s
console.log(cadenaDeTexto.charAt(28 - 1));//0
console.log(cadenaDeTexto.charAt(28));// ''

// indexOf(valor,indece) - Devuelve la posicion del primer caracter del caracter de la cadena especificada, y en caso de no encontrarse nos retornara -1

console.log(cadenaDeTexto.indexOf("soy")); //5
console.log(cadenaDeTexto.indexOf("laura")); //-1
console.log(cadenaDeTexto.indexOf("de", 17));  //20


//lastIndexOf(valor,indide) - Devuelve la posicion del ultimo caracter de la cadena especificada, si no existe nos retornara -1. El recorrido es de derecha a izquierda

console.log(cadenaDeTexto.lastIndexOf("cadena")); //13
console.log(cadenaDeTexto.lastIndexOf("de", 19)); //15
console.log(cadenaDeTexto.lastIndexOf("hogar")); // -1

// includes(valor, indice) Devuelve true or false, dependiendo si la cadena especificada se encuntra o no en lo que estemos evaluando
console.log(cadenaDeTexto.includes('cadena')); //true
console.log(cadenaDeTexto.includes("de", 20)); //true
console.log(cadenaDeTexto.includes("numero")); //false

//startsWith(valor,indice) Devuelve en true en caso de que comience la cadena de texto con lo que he pasado de valor (sting). En caso de no encontrarse nos devolvera false

console.log(cadenaDeTexto.startsWith('Hola')); //true
console.log(cadenaDeTexto.startsWith('Hola ')); //true
console.log(cadenaDeTexto.startsWith('hola ')); //false
console.log(cadenaDeTexto.startsWith('Hola s')); //true
console.log(cadenaDeTexto.startsWith('soy', 4)); //false
console.log(cadenaDeTexto.startsWith('soy', 5)); //true

// endsWith(valor,indice) Devuelve en true en caso de que finalice la cadena de texto con lo que hemos pasado de valor: (sting). En caso de no encontrarse nos devolvera false

console.log(cadenaDeTexto.endsWith("texto")); //true
console.log(cadenaDeTexto.endsWith("de")); //false
console.log(cadenaDeTexto.endsWith("de", 22)); //true

// Busquen el ultimo caracter de una cadena
console.log(cadenaDeTexto[cadenaDeTexto.length - 1]);
console.log(cadenaDeTexto.charAt(cadenaDeTexto.length - 1));

//at(indice) - Nos desvuleve el caracter en la posicion especificada, si no lo encuentra nos devuleve undefined. La diferencia con chartAt, es que recibe tanto numeros positivos, y numeros negativos, y la respuesta en caso de no encontrarse. chartAt(''), mientras que at(undefined)

console.log(cadenaDeTexto.at(0)); //H
console.log(cadenaDeTexto.at(5)); //s
console.log(cadenaDeTexto.at(-1)); //o

// chartAt --> ✅numeros positivos ✅en caso de no encontrarse retorna ---->"" (string vacio)
// at --> ✅numeros positivos y negativos ✅en caso de no encontrarse retorn ---->undefined


// convertir un string a mayusculas y  a minusculas

console.log(cadenaDeTexto.toLowerCase()); //hola soy una cadena de texto
console.log(cadenaDeTexto.toUpperCase()); //HOLA SOY UNA CADENA DE TEXTO
console.log(cadenaDeTexto.at(5).toUpperCase()); // S



//split(separador, indice) - Devuelve un array con las partes de la cadena se separan por el separador especificado

console.log(cadenaDeTexto.split("")); // todo el string en un array, caracter por caracter
console.log(cadenaDeTexto.split(" "));
console.log("02-09-2023".split("-")); // ["02","09",""2023"]



// Extraer  un trozo de cadena

//substring(indiceInicial, indiceFinal) - Devuelve una subcadena de la cadena ORIGINA. ⚠️No recibe numeros Negativos
console.log(cadenaDeTexto.substring(0, 4)); //Hola
console.log(cadenaDeTexto.substring(5, 8)); //soy
console.log(cadenaDeTexto.substring(23, 28)); //soy

//slice(indiceInicial, indiceFinal) - Devuelve una subcadena de la cadena Origual. Si recibe numeros negativos
console.log(cadenaDeTexto.slice(0, 4)); //Hola
console.log(cadenaDeTexto.slice(23, -1)); //text
console.log(cadenaDeTexto.slice(5, -6)); //soy una cadena de

// trim
console.log('           hola           ');//           hola           
console.log('           hola           '.trim()); //hola
console.log('           hola           '.trimStart()); //hola
console.log('           hola           '.trimEnd()); //hola
console.log('            hola como estas?'.trim()); //hola

//Busqueda para remplazos de valroes

//El metodo replace(searchValue,replaceValue). Buscara el valor para hacer math y una ves que lo encuentre remplazara todos los valore que haya encontrado por el nuevo valors

console.log(cadenaDeTexto.replace('texto', 'caracteres')) //Hola soy una cadena de caracteres
console.log(cadenaDeTexto.replace('de texto', 'con caracteres')) //Hola soy una cadena con caracteres


//repeat
console.log('hola mundo    '.repeat(3)); //hola mundo    hola mundo    hola mundo


//de number a string
const number = 21
console.log(typeof (number));//number

console.log(number.toString()); //21
console.log(typeof (number.toString())); //string


//slice
//Extraer la primera palabra de un string en mayusculas
const indice = cadenaDeTexto.indexOf(" ")
const palabra = cadenaDeTexto.slice(0, indice)
console.log(palabra.toUpperCase()); //HOLA


//split
function word(cadena) {
  const instancia = cadena.split(" ")//["Hola", "soy" ,...]
  return instancia[0]
}
console.log(word(cadenaDeTexto));