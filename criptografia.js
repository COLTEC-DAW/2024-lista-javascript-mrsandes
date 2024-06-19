function criptografia(array, fn, jumps) {
    array = array.toUpperCase().split("");

    for (let i = 0; i < array.length; i++) {
        array[i] = fn(array[i], jumps);
    }

    return array.join("");
}

function cifraDeCesar(c, i) {
    let char = c.charCodeAt(0);

    if (char >= 65 && char <= 90) {
        char += i;

        if (char > 90) {
            char -= 26;
        }
    }

    return String.fromCharCode(char);
    
}

console.log(criptografia("abc", cifraDeCesar, 3));
