function triangulo(linhas) {
    let triangulo = "";

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < i + 2; j++) {
            triangulo += "#"
        }
        
        triangulo += "\n";        
    }
    
    console.log(triangulo);
}

let linhas = prompt("Digite o numero de linhas do triangulo: ");
triangulo(linhas);