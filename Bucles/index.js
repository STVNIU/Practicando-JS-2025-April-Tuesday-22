// Bucle While
let number = 0;

// ? While -> 1. Primero verifica la condición ; 2. Ejecuta si la condición es verdadera. 3. Termina cuando la condición es falsa
while (number < 10) {
    number++; 
    console.log(number)
}



// ? do while -> 1. Ejecuta el codigo sin cumplir ni una condición.
do {
    console.log(number);
    number ++
}

while (number > 10) 




// ? for -> 1. Declaras variable , 2. Verifica la condicional , 3. Suma 1 y da una vuelta. 
for (let i = 1 ; i <= 3 ; i++) {
    console.log(i);
}     


for (let i = 1 ; i <= 11 ; i ++) {
    console.log(i);
    if (i == 10) {
        break  
        // ? Sentencia break (Termina la ejecursión cuando se cumple la condición) - continue (Ejecuta el código ignorando cuando se cumple la condición) 
    }
}




// ? for in -> Recorre la posición del array
let animales = ["gato" , "perro" , "tiranosaurio rex"];
for (animal in animales) {
    console.log(animal)
}



// ? for of -> Recorre los valores del array
animales = ["gato" , "perro" , "tiranosaurio rex"];
for (animal of animales) {
    console.log(animal)
} 


// Hello, welcome to my home.









