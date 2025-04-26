/* 
1. Calculadora básica
Crea una función que reciba dos números y una operación (suma, resta, multiplicación o división) y devuelva el resultado. 
*/

// numer 1 = a ; number 2 = b
const a = 2;
const b = 3;
let operador = "";
switch (operador) {
    case "+" :
        console.log(a + b);
        break;
    case "-" :
        console.log(a - b);
        break;
    case "*" :
        console.log(a * b);
        break;
    case "/" :
        if (b == 0) {
            console.log("No se puede divir entre cero");
        } else {
            console.log(a / b);
        }
        break;
    default:
        if (operador === "") {
            break
        } else {
            console.log("Ingrese un dato valido")
        }
}




