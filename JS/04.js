/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */


// Funciones básicas :
// 1 forma :
// function sinParametros () {
    // console.log("Hola, soy una función sin parámetros ni retorno");
// }

// const conParametrosYRetorno = (parametro1 , parametro2) => {
    // return `Hola, soy una función con parámetros y retorno: ${parametro1} ${parametro2}`;
// }

// Funciones anidadas :
// const funcionAnidada = () => {
    //console.log("Hola, soy una función anidada dentro de otra función");
    // const funcionInterna = () => {
        // return "Hola, soy una función interna";
    // }
    // console.log(funcionInterna());
// }

// funcionAnidada();


/* const funcionNumero = (multiplo3 , multiplo5) => {
    for (let i = 1 ; i <= 100 ; i++) {
        if (i % 3 === 0 && i % 5 ===0) {
            console.log(`El número ${i} se reemplaza por ${multiplo3}`);
            console.log(`El número ${i} se reemplaza por ${multiplo5}`);
        }
    }
}
funcionNumero("hola 3" , "hola 5"); */

/* 
Para resolver este ejercicios primero defino una función con 2 parámetros para asi poder reemplazar cuando es multiplo de 3 y 5. Después defino un for que va desde el 1 hasta el 100 como me pide el ejercicio. después defino un if y else if y al final un else para lo que no me cumpla las condiciones.
*/
const funcionNumero = (string3 , string5) => {
    for (let i = 1 ; i <= 100 ; i++) {
        if (i % 3 ===0 && i % 5 === 0) {
            console.log(`El número ${i} es multiplo de 3 y 5, se reemplaza por ${string3} y  ${string5}.`);
        } else if (i % 3 === 0) {
            console.log(`El número ${i} es multiplo de 3, se reemplaza por ${string3}.`);
        } else if (i % 5 === 0) {
            console.log(`El numero ${i} es multiplo de 5, se reemplaza por ${string5}.`);
        } else {
            console.log(`El número ${i} no es multiplo de 3 ni de 5.`)
        } 
    }
}
const holaMundoFunciones = funcionNumero("hello3" , "hello5");
