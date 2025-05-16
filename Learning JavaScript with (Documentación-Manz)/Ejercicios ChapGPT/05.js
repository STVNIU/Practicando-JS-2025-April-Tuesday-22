/* 

🚀 Ejercicio 5: Contar Vocales en una Cadena
Crea una función llamada contarVocales que reciba una cadena de texto y retorne el número de vocales (a, e, i, o, u) que contiene. Ignora las mayúsculas y minúsculas.

*/

const contarVocalesEnUnaCadena = (string) => {
    const contarVocales = string.toLowerCase().split("").includes("a" , "e" , "i" , "o" , "u");
    return contarVocales;
}

console.log(contarVocalesEnUnaCadena("Hola Mundo xD"));




