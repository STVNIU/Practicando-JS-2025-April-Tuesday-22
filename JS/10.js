// Ejercicio 6: Implementar la búsqueda binaria en un array ordenado

  // Solución:
function busquedaBinaria(array, elementoBuscado) {
  let inicio = 0;
  let fin = array.length - 1;
  
  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    
    if (array[medio] === elementoBuscado) {
      return medio; // Se encontró el elemento, devuelve su posición
    } else if (array[medio] < elementoBuscado) {
      inicio = medio + 1; // Búsqueda en la mitad derecha
    } else {
      fin = medio - 1; // Búsqueda en la mitad izquierda
    }
  }
  
  return -1; // Elemento no encontrado
}
  
  // Prueba
  console.log("Posición del número 7:", busquedaBinaria([1, 3, 5, 7, 9, 11], 7));