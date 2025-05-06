// Ejercicio 7: Crear una función que invierta una cadena

const reverseChain = (string) => {
    // Defino una variable que guarda el string y lo pone en reversa.
    const stringConvertirArray = [...string].reverse();
    // Defino otro variable para aplicar Join y que este haga reversa.
    const arrayConvertirAString = stringConvertirArray.join("");
    // Retorna el string invertido.
    return `La palabra ${string} se invierte a ${arrayConvertirAString}.`
};

// Muestro en consola la función que invierte un array.
// console.log(reverseChain("Hola"));


// Versión IA: 
const reverseChainIA = (string) => {
    const reversed = [...string].reverse().join("");
    return `La palabra ${string} se invierte a ${reversed}.`;
};


