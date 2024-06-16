function tabuleiro(linhas) {
    let tabuleiro = "";

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < linhas; j++) {
            tabuleiro += "# "
        }

        tabuleiro += "\n";  
        
        if (i % 2 == 0) {
            tabuleiro += " ";       
        } 
    }
    
    console.log(tabuleiro);
}

let linhas = prompt("Digite o numero de linhas do tabuleiro: ");
tabuleiro(linhas);