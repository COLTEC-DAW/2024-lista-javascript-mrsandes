function palindromo(palavra) {
    let palavraInvertida = palavra.split("").reverse().join("");
    
    return palavra.toLowerCase() === palavraInvertida.toLowerCase();
}

let palavra = prompt("Digite a palavra: ");
palindromo(palavra);