/* 
1) Realizar una función que nos permite realizar las 4 operaciones aritméticas, es decir, nos permite sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, o deben ser los valores (a , b) y uno el nombre de la operación (en minúsculas). 
Si el parámetro de la operación no es valido que mande un error personalizado a la consola.
*/

operaciones = (operador , a , b) => {
        switch (operador) {
            case "+" :
                return a + b;
            case "-" :
                return a - b;
            case "*" :
                return a * b;
            case "/" :
                if (b == 0) {
                    return "No se puede divir entre cero";
                } else {
                    return a / b;
                }
            default:
                if (a && b == String) {
                    console.log("Ingresar números")
                } else {
                    console.log8
                }
                    return "Ingrese un dato valido"
            }
        }
console.log(operaciones("+" , 2 , a));






