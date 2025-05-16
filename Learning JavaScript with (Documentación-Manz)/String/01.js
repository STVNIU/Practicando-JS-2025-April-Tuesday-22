// Qué es un string?
// String -> Texto(Cadena de texto)

const myString = "Hola JavaScript";

// Acceder a la cantidad de caracteres del string
console.log(myString.length);

// Acceder a los caracteres del string
console.log(myString[0]);
console.log(myString[1]);

// Cambiar el caracter de un string 
let cambiarCaracterDeUnString = myString[0] = 1;
console.log(cambiarCaracterDeUnString);

// Método repeat 
console.log(myString.repeat(2));

// backticks

const aplicandoBackticks = `Hola mundo en: ${myString}`;
console.log(aplicandoBackticks);








