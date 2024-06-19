function criaMatriz(tam, fn) {
    let matriz = new Array(tam);

    for (let i = 0; i < tam; i++) {
        matriz[i] = new Array(tam);

        for (let j = 0; j < tam; j++) {
            matriz[i][j] = fn(i, j);
        }
    }

    return matriz;
}

console.log(criaMatriz(3, function(i, j) {
    return i + j;
}));

console.log();

console.log(criaMatriz(3, function(i, j) {
    return i * j;
}));

console.log();

console.log(criaMatriz(3, function(i, j) {
    return i === j ? 1 : 0;
}));

console.log();

console.log(criaMatriz(3, function(i, j) {
    return i ** 2 / (j + 1);
}));

console.log();

console.log(criaMatriz(3, function(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}));
