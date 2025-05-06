const myArray = [1, 2, 3, -4, -3];
const cuantosPositivos = (array) =>{
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] > 0) {
            return array[i];
        } else {
            return "No hay números positivos en el array";
        }
    }
}
console.log(cuantosPositivos(myArray));

// No lo pude resolver.