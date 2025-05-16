/* 

🚀 Ejercicio 1: Calculadora de Descuentos
Crea una función llamada calcularDescuento que reciba dos parámetros: el precio original y el porcentaje de descuento. La función debe calcular y devolver el precio final después de aplicar el descuento.

*/

const calculadoraDeDescuentos = (precioOriginal , porcentajeDeDescuento) => {
    const descuento = precioOriginal * (porcentajeDeDescuento / 100);
    const precioFinal = precioOriginal - descuento
    return precioFinal;
}

console.log(calculadoraDeDescuentos(100 , 20));
console.log(calculadoraDeDescuentos(250 , 15));                 

