function bubbleSort(array, fn) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (fn(array[j], array[j + 1]) > 0) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

function crescente(x, y) {
    return x - y;
}

function decrescente(x, y) {
    return y - x; 
}

function crescenteImpares(x, y) {
    if (x % 2 !== 0 && y % 2 !== 0) {
        return x - y;
    }
    return 0; 
}

function decrescentePares(x, y) {
    if (x % 2 === 0 && y % 2 === 0) {
        return y - x;
    }
    return 0;
}

console.log("Crescente:", bubbleSort([5, 3, 2, 4, 1], crescente));
console.log("Decrescente:", bubbleSort([5, 3, 2, 4, 1], decrescente));
console.log("Crescente impares:", bubbleSort([5, 3, 2, 4, 1], crescenteImpares));
console.log("Decrescente Pares:", bubbleSort([5, 3, 2, 4, 1], decrescentePares));
