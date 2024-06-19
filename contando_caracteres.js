function countChars(frase, c) {
    let caracteres = frase.split("");
    let contador = 0;

    caracteres.forEach(element => {
        contador += 1 ? element == c : 0;
    });

    return contador;
}

console.log(countChars("aabbaa aaaa bb aaa bbbb", 'b'));