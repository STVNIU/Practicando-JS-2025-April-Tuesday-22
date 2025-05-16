const programacionFuncional = (operador) => {
    return (a , b) => {
        switch (operador) {
            case "+" :
                return a + b;
                break
            case "-" :
                return a - b;
            default :
                return "FIN"
        }
    }
}

console.log(programacionFuncional("-")(2 , 3));
