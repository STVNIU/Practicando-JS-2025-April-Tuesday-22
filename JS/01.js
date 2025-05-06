const myArray = [1, 2, 3, 4, 5];
const myArray2 = [10, 222, 13, 2, 3];
const menorMayor = (array) => {
    const menor = Math.min(...array);
    const mayor = Math.max(...array);
    return `El menor número del array es ${menor} y el mayor número del array es ${mayor}`;
}
console.log(menorMayor(myArray2));

