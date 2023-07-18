function calculadora(tipo, numA, numB) {
    if(tipo === 'soma') {
        return numA + numB;
    } else if(tipo === 'subtração') {
        return numA - numB;
    } else if(tipo === 'multiplicação') {
        return numA * numB;
    } else if(tipo === 'divisão'){
        return numA / numB;
    }

};

console.log(calculadora('', 2, 3));