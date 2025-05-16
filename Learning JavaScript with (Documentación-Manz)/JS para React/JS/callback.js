const creandoMiPrimerCallaback = (number1 , number2 , op) => {
    return op(number1 , number2);
};

// Pasar como argumento una función
console.log(creandoMiPrimerCallaback(2 , 4 , (a , b) => a + b));

