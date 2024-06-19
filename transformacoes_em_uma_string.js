function stringTransform(string, fn) {
    string = string.split("");

    for (let i = 0; i < string.length; i++) {
        string[i] = fn(string[i]);
    }

    return string.join("");
}

function altaVogais(c) {
    if (verificaVogal(c)) {
        if (c >= 'a' && c <= 'z') {
            return c.toUpperCase();
        }
    }
    return c;
}

function altaConsoante(c) {
    if (!verificaVogal(c)) {
        if (c >= 'a' && c <= 'z') {
            return c.toUpperCase();
        }
    }
    return c;
}

function baixaVogais(c) {
    if (verificaVogal(c)) {
        if (c >= 'A' && c <= 'Z') {
            return c.toLowerCase();
        }
    }
    return c;
}

function baixaConsoante(c) {
    if (!verificaVogal(c)) {
        if (c >= 'A' && c <= 'Z') {
            return c.toLowerCase();
        }
    }
    return c;
}

function verificaVogal(c) {
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    for (let i = 0; i < vogais.length; i++) {
        if (c === vogais[i]) {
            return true;
        }
    }

    return false;
}

let string1 = "Exemplo de Frase Com Vogais e Consoantes";
let string2 = "HELLO WORLD";

console.log("original:", string1);
console.log("transformada com altaVogais:", stringTransform(string1, altaVogais));
console.log("transformada com altaConsoante:", stringTransform(string1, altaConsoante));
console.log("transformada com baixaVogais:", stringTransform(string1, baixaVogais));
console.log("transformada com baixaConsoante:", stringTransform(string1, baixaConsoante));

console.log("\nOriginal:", string2);
console.log("transformada com altaVogais:", stringTransform(string2, altaVogais));
console.log("transformada com altaConsoante:", stringTransform(string2, altaConsoante));
console.log("transformada com baixaVogais:", stringTransform(string2, baixaVogais));
console.log("transformada com baixaConsoante:", stringTransform(string2, baixaConsoante));
