/* 
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
*/

// Solución 
/* for (let i = 0 ; i <= 55 ; i++) {
    if (i >= 10 && i <= 55 && i % 2 === 0 && i !== 16 && i % 3 !== 0 || i === 55) {
        console.log(i);
    }
}  */

// ? Solución IA 
/* for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
        console.log(i);
    }
}
    
for (let i = 10; i <= 55; i++) {
    if ((i % 2 === 0 && i !== 16 && i % 3 !== 0) || i === 55) {
        console.log(i);
    }
}
 */
