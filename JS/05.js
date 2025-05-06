/*
    ? DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no numéricos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
*/

// Agendad de contactos

let contacto = [];
let solicitar = prompt("Qué función desea utilizar: ");
const contactos = {
    name: "Irvin",
    phoneNumber: 2929292, 
}
const funcionalidades = (solicitar) => {
    if (solicitar === "busqueda") {
        console.log(contactos.name);
        console.log(phone.phoneNumber);
    } else if (solicitar === "numero") {
        console.log(contactos.phoneNumber);
    } else if (solicitar === "actualizacion") {
        console.log("Datos actualizados");
    } else {
        console.log("Ingrese una funcion valida");
    }
}
funcionalidades();




