function verifica(num, fn) {
    return fn(num);
}

function impar(num) {
    return num % 2 != 0;
}

function primo(num) {
    for (let i = 2; i < num; i++)
        if (num % i == 0) {
            return false
        };

    return num > 1;
}

console.log("impares: ");
console.log(verifica(1, impar));
console.log(verifica(2, impar));
console.log(verifica(3, impar));
console.log(verifica(4, impar));
console.log(verifica(5, impar));
console.log(verifica(6, impar));
console.log(verifica(7, impar));
console.log(verifica(8, impar));
console.log(verifica(9, impar));

console.log("\nprimos");
console.log(verifica(1, primo));
console.log(verifica(2, primo));
console.log(verifica(3, primo));
console.log(verifica(4, primo));
console.log(verifica(5, primo));
console.log(verifica(6, primo));
console.log(verifica(7, primo));
console.log(verifica(8, primo));
console.log(verifica(9, primo));