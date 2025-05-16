/* 

🚀 Ejercicio 2: Verificador de Palíndromos
Crea una función llamada esPalindromo que reciba una cadena de texto y verifique si es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda). Ignora los espacios y convierte todo a minúsculas para hacer la verificación.

*/

const esPalindromo = (texto) => {
    const convertirTextoAMinuscula = texto.toLowerCase();
    
    const eliminarEspacios = convertirTextoAMinuscula.replace(/\s/g, "");
    
    const convertirTextoAArray = eliminarEspacios.split("");
    
    const invertirArray = convertirTextoAArray.reverse();   
    
    const pasarloATexto = invertirArray.join("");
    
    if (texto.toLowerCase().replace(/\s/g, "") === pasarloATexto) {
        return true
    } else {
        return false
    }
};

console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("Hola Mundo"));


// IA

/* 

const esPalindromo = (texto) => {
    const textoProcesado = texto.toLowerCase().replace(/\s/g, "");
    return textoProcesado === textoProcesado.split("").reverse().join("");
};

console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("Hola Mundo"))

*/


/* 

const esPalindromo = (texto) => {
    if (typeof texto !== "string") return false;
    const textoProcesado = texto.toLowerCase().replace(/\s/g, "");
    return textoProcesado === textoProcesado.split("").reverse().join("");
};

*/
