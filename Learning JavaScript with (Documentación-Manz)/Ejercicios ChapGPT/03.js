/* 🚀 Ejercicio 3: Generador de Números Aleatorios
Crea una función llamada generarAleatorio que reciba dos parámetros: un valor mínimo y un valor máximo. La función debe devolver un número aleatorio entre esos dos valores (incluyendo ambos). */

const generarAleatorio = (minimo , maximo) => {
    const number = Math.floor(Math.random() * maximo);
    return number
}


 console.log(generarAleatorio(1, 10)); // Debería retornar un número entre 1 y 10


/* 

IA
const generarAleatorio = (minimo, maximo) => {
    const number = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return number;
}

console.log(generarAleatorio(1, 10)); // Debería retornar un número entre 1 y 10


*/