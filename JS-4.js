let numbers = [1, 2, 3, 4, 5];
let impares = numbers.filter(number => number % 2 !== 0) 
let encontradoUnValor = numbers.find(number => number > 1)
let contieneValor = numbers.includes(3);
let unElementoCumpleLaCondicion = numbers.some(number => number > 10);
let unElementoCumpleLaCondicionTodos = numbers.every(number => number > 10);
console.log(unElementoCumpleLaCondicion);   
let myArray = [1, 2, 3, 4, 5];
let myArray2 = [6, 7, 8, 9, 10];
let newArray = myArray.concat(myArray2);
console.log(newArray.join(" , ")); 
let frutas = ["banana", "manzana", "kiwi", "mango", "sandía"];
frutas.push("naranja"); // Agrega un nuevo elemento al final.
frutas.pop(); // Elimina el último elemento.
frutas.shift(); // Elimina el primer elemento.
frutas.unshift("fresa"); // Agrega un nuevo elemento al principio.
frutas = []; // Elimina todos los elementos de la matriz.
frutas.push("banana", "manzana", "kiwi", "mango", "sandía"); // Rellena la matriz nuevamente.
console.log(frutas);
let copiaFruta = frutas.slice(1 , 3); // Crea una copia de la matriz desde el índice 2 hasta el índice 4 (sin incluirlo).
console.log(copiaFruta); // Imprime la copia de la matriz.
frutas = []; // Elimina todos los elementos de la matriz.
frutas.push("banana", "manzana", "kiwi", "mango", "sandía"); // Rellena la matriz nuevamente.
frutas.splice(1, 3); // Elimina 3 elementos desde el índice 1.
console.log(frutas); // Imprime la matriz después de eliminar los elementos.