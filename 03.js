/* 
3. Realizar una función que almacene en un arreglo todos los números pares desde a hasta b.
*/

function exercise3 (a , b) {
    let num = [];
    for (let i = a ; i <= b ; i++) {
        if (i % 2 === 0) num.push(i);
    }
    return num
}

console.log(exercise3(2 , 50))
